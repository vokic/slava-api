import slavas from "../data/slavas.json";

export default function handler(req, res) {
  let result = slavas;

  const { month, type } = req.query;

  if (month) {
    const padded = month.padStart(2, "0");
    result = result.filter((s) => s.date.slice(5, 7) === padded);
  }

  if (type) {
    result = result.filter((s) => s.type.toLowerCase() === type.toLowerCase());
  }

  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.status(200).json(result);
}
