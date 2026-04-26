import slavasData from "../data/slavas.json";

// Helper to validate month format (01-12)
function isValidMonth(month) {
  if (typeof month !== 'string') return false;
  const monthInt = parseInt(month, 10);
  return monthInt >= 1 && monthInt <= 12 && month.length === 2;
}

// Strict MM-DD list validator, matches the OpenAPI 'date' parameter pattern.
const DATE_QUERY_RE = /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])(,(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]))*$/;
function isValidDateQuery(dateQuery) {
  return typeof dateQuery === 'string' && DATE_QUERY_RE.test(dateQuery);
}

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  const { month, date: dateQuery } = req.query;
  let results = [];

  // Input Validation
  if (month !== undefined && !isValidMonth(month)) {
    return res.status(400).json({ message: "Invalid month parameter. Use '01' through '12'." });
  }
  if (dateQuery !== undefined && !isValidDateQuery(dateQuery)) {
    return res.status(400).json({ message: "Invalid date parameter. Use comma-separated MM-DD format (e.g., '01-20,03-15')." });
  }

  const datesToFilter = dateQuery ? dateQuery.split(",").map((d) => d.trim()) : null;

  if (month && datesToFilter) {
    // Filter by specific month and specific date(s)
    const monthData = slavasData[month];
    if (monthData && Array.isArray(monthData)) {
      results = monthData.filter(
        (day) => day.date && datesToFilter.includes(day.date)
      );
    }
  } else if (datesToFilter) {
    // Filter by date(s) across all months
    for (const mKey in slavasData) {
      const monthData = slavasData[mKey];
      if (Array.isArray(monthData)) {
        const filteredDays = monthData.filter(
          (day) => day.date && datesToFilter.includes(day.date)
        );
        results.push(...filteredDays);
      }
    }
  } else if (month) {
    // Filter by month only, return all valid days in that month
    const monthData = slavasData[month];
    if (monthData && Array.isArray(monthData)) {
      // Assuming slavas.json is cleaned of initial {"month": "Name"} objects
      // and all remaining objects in the array are actual day entries.
      // If not cleaned, `day.date` check is still useful.
      results = monthData.filter((day) => day.date);
    }
  } else {
    // No specific month or date filter, return all valid data
    for (const mKey in slavasData) {
      const monthData = slavasData[mKey];
      if (Array.isArray(monthData)) {
        // Same assumption as above about slavas.json being cleaned.
        results.push(...monthData.filter((day) => day.date));
      }
    }
  }

  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=604800");
  res.status(200).json(results);
}
