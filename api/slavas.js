import slavasData from "../data/slavas.json";

export default function handler(req, res) {
  const { month, date } = req.query;

  let results = [];

  if (date) {
    // Filter by date(s) ignoring month
    const datesToFilter = date.split(",").map((d) => d.trim());
    for (const mKey in slavasData) {
      const days = slavasData[mKey];
      if (!Array.isArray(days)) continue;
      const filtered = days.filter(
        (day) => day.date && datesToFilter.includes(day.date)
      );
      results.push(...filtered);
    }
  } else if (month) {
    // Filter by month only
    const days = slavasData[month];
    if (days && Array.isArray(days)) {
      results = days.filter((day) => day.date);
    }
  } else {
    // No filter, return all
    for (const mKey in slavasData) {
      const days = slavasData[mKey];
      if (!Array.isArray(days)) continue;
      results.push(...days.filter((day) => day.date));
    }
  }

  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.status(200).json(results);
}
