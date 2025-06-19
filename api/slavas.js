import slavasData from "../data/slavas.json";

export default function handler(req, res) {
  let { month, months, date } = req.query;

  // Flatten all days with monthKey attached
  const allDays = Object.entries(slavasData).flatMap(([mKey, days]) =>
    days
      .filter((day) => day && typeof day === "object" && day.date)
      .map((day) => ({ ...day, monthKey: mKey }))
  );

  let filtered = allDays;

  // Filter by 'month' param (single month string, e.g. "01")
  if (month) {
    filtered = filtered.filter((day) => day.monthKey === month);
  }

  // Filter by 'months' param (comma-separated months, e.g. "01,02,03")
  if (months) {
    const monthList = months.split(",").map((m) => m.trim());
    filtered = filtered.filter((day) => monthList.includes(day.monthKey));
  }

  // Filter by 'date' param (comma-separated day strings, e.g. "1.1.,7.1.")
  if (date) {
    const dateList = date.split(",").map((d) => d.trim());
    filtered = filtered.filter((day) => dateList.includes(day.date));
  }

  // Remove duplicates if month & months both given, just in case
  filtered = [
    ...new Map(filtered.map((d) => [d.monthKey + d.date, d])).values(),
  ];

  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.status(200).json(filtered);
}
