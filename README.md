# Serbian Slava API

## API Status

[![API Status](https://img.shields.io/uptimerobot/status/m800768228-3171c2291130d85e0de4924a)](https://uptimerobot.com/dashboard#M800768228)  
_Status provided by [UptimeRobot](https://uptimerobot.com)_

A simple REST API providing data about traditional Serbian slavas (patron saint days), with optional filters by month and date.

---

## Features

- Retrieve a list of Serbian slavas (patron saint days)
- Filter by single month (e.g., `month=01`)
- Filter by date(s) in universal `MM-DD` format (comma-separated, e.g., `date=01-01,07-01`)
- JSON response with UTF-8 encoding
- No sorting applied by default (results appear in data order)
- Deployed and hosted on Vercel

---

## Test it

- **API Test:**  
  [https://serbian-slavas-api.vercel.app/api/slavas](https://serbian-slavas-api.vercel.app/api/slavas)

- **Filter by single month:**  
  [https://serbian-slavas-api.vercel.app/api/slavas?month=01](https://serbian-slavas-api.vercel.app/api/slavas?month=01)

- **Filter by specific dates (MM-DD format):**  
  [https://serbian-slavas-api.vercel.app/api/slavas?date=01-01,07-01](https://serbian-slavas-api.vercel.app/api/slavas?date=01-01,07-01)

- **Swagger UI Documentation:**  
  Interactive API docs with example requests and response schemas.  
  [https://serbian-slavas-api.vercel.app/dist/](https://serbian-slavas-api.vercel.app/dist/)

---

## API Endpoints

### GET /api/slavas

Get the full list of slavas or filter by query parameters.

**Query Parameters:**

| Parameter | Type   | Description                                         | Example     |
| --------- | ------ | --------------------------------------------------- | ----------- |
| month     | string | Single numeric month (with leading zero, e.g. "01") | 01          |
| date(s)      | string | Comma-separated list of dates in `MM-DD` format     | 01-01,07-01 |

**Notes:**

- If `date` parameter is provided, filtering is done by dates only, ignoring month.
- Filtering by `month` returns all slavas in that month.
- If no query parameters are provided, the API returns all slavas.
- The API returns raw data as stored in JSON, preserving original order (no automatic sorting).

**Example curl requests:**

```bash
# Get all slavas
curl "https://serbian-slavas-api.vercel.app/api/slavas"

# Get all slavas in January
curl "https://serbian-slavas-api.vercel.app/api/slavas?month=01"

# Get slavas on specific dates (MM-DD format)
curl "https://serbian-slavas-api.vercel.app/api/slavas?date=01-01,07-01"
```
