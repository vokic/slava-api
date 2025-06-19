import slavasData from "../data/slavas.json";

export default function handler(req, res) {
  const { month, months, date } = req.query;

  // Prepare list of months to filter by
  let monthsToFilter = [];

  if (month) {
    monthsToFilter = [month];
  } else if (months) {
    monthsToFilter = months.split(",").map((m) => m.trim());
  } else {
    monthsToFilter = Object.keys(slavasData);
  }

  // Collect all days from the filtered months
  let days = [];
  for (const m of monthsToFilter) {
    if (slavasData[m]) {
      days.push(...slavasData[m].filter((d) => d.date)); // only days with date
    }
  }

  // Filter by dates if provided
  if (date) {
    const datesToFilter = date.split(",").map((d) => d.trim());
    days = days.filter((d) => datesToFilter.includes(d.date));
  }

  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.status(200).json(days);
}
