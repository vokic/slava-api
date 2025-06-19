# Serbian Slava API

## API Status

[![API Status](https://img.shields.io/uptimerobot/status/m800768228-3171c2291130d85e0de4924a)](https://uptimerobot.com/dashboard#M800768228)  
_Status provided by [UptimeRobot](https://uptimerobot.com)_

A simple REST API providing data about traditional Serbian slavas (patron saint days), with optional filters by month(s) and date(s).

---

## Features

- Retrieve a list of Serbian slavas (patron saint days)
- Filter by single month (e.g., `month=01`)
- Filter by multiple months (comma-separated, e.g., `months=01,02,12`)
- Filter by date(s) (comma-separated day strings, e.g., `date=1.1.,7.1.`)
- JSON response with UTF-8 encoding
- No sorting applied by default (results appear in data order)
- Deployed and hosted on Vercel

---

## Test it

- **API Test:**  
  [https://serbian-slavas-api.vercel.app/api/slavas](https://serbian-slavas-api.vercel.app/api/slavas)

- **Filter by single month:**  
  [https://serbian-slavas-api.vercel.app/api/slavas?month=01](https://serbian-slavas-api.vercel.app/api/slavas?month=01)

- **Filter by multiple months:**  
  [https://serbian-slavas-api.vercel.app/api/slavas?months=01,02](https://serbian-slavas-api.vercel.app/api/slavas?months=01,02)

- **Filter by specific dates:**  
  [https://serbian-slavas-api.vercel.app/api/slavas?date=1.1.,7.1.](https://serbian-slavas-api.vercel.app/api/slavas?date=1.1.,7.1.)

- **Swagger UI Documentation:**  
  Interactive API docs with example requests and response schemas.  
  [https://serbian-slavas-api.vercel.app/dist/](https://serbian-slavas-api.vercel.app/dist/)

---

## API Endpoints

### GET /api/slavas

Get the full list of slavas or filter by query parameters.

**Query Parameters:**

| Parameter | Type   | Description                                                                               | Example   |
| --------- | ------ | ----------------------------------------------------------------------------------------- | --------- |
| month     | string | Single numeric month (with leading zero, e.g. "01") to filter slavas                      | 01        |
| months    | string | Comma-separated list of months (e.g. "01,02,12") to filter multiple months                | 01,02,12  |
| date      | string | Comma-separated list of dates in `D.M.` format (e.g. "1.1.,7.1.") to filter specific days | 1.1.,7.1. |

**Notes:**

- If both `month` and `months` are provided, results are combined without duplicates.
- Filtering by `date` works independently and can be combined with month filters.
- The API returns raw data as stored in the JSON, preserving original order (no automatic sorting).

**Example requests:**

```bash
curl https://serbian-slavas-api.vercel.app/api/slavas
curl https://serbian-slavas-api.vercel.app/api/slavas?month=01
curl https://serbian-slavas-api.vercel.app/api/slavas?months=01,02
curl https://serbian-slavas-api.vercel.app/api/slavas?date=1.1.,7.1.
curl "https://serbian-slavas-api.vercel.app/api/slavas?months=01,02&date=1.1.,7.1."
```
