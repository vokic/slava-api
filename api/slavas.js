import slavasData from "../data/slavas.json";

export default function handler(req, res) {
  const { month, date } = req.query;

  let results = [];

  if (date) {
    // Filter by date(s), ignoring month if date provided
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
    // Filter by month key
    const days = slavasData[month];
    if (days && Array.isArray(days)) {
      // Return all days with date in this month
      results = days.filter((day) => day.date);
    }
  } else {
    // No filter, return all days with date
    for (const mKey in slavasData) {
      const days = slavasData[mKey];
      if (!Array.isArray(days)) continue;
      const filtered = days.filter((day) => day.date);
      results.push(...filtered);
    }
  }

  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.status(200).json(results);
}
