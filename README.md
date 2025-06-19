# Serbian Slava API

## API Status

[![API Status](https://img.shields.io/uptimerobot/status/m800768228-3171c2291130d85e0de4924a)](https://uptimerobot.com/dashboard#M800768228)  
_Status provided by [UptimeRobot](https://uptimerobot.com)_

A simple REST API providing data about traditional Serbian slavas (patron saint days), with optional filters by month and fasting type.

---

## Features

- Retrieve a list of Serbian slavas
- Filter by month (1-12)
- Filter by fasting type (`posna` or `mrsna`)
- JSON response with UTF-8 encoding
- Deployed and hosted on Vercel

---

## Test it

- **API Test:**  
  [https://slava-api-two.vercel.app/api/slavas](https://slava-api-two.vercel.app/api/slavas)

- **Working API Live:**  
  [https://slava-api-two.vercel.app/api/slavas?month=12](https://slava-api-two.vercel.app/api/slavas?month=12)

- **Swagger UI Documentation:**  
  Interactive API docs with example requests and response schemas.  
  [https://slava-api-two.vercel.app/dist/](https://slava-api-two.vercel.app/dist/)

---

## API Endpoints

### GET /api/slavas

Get the full list of slavas or filter by query parameters.

**Query Parameters:**

| Parameter | Type   | Description                              | Example |
| --------- | ------ | ---------------------------------------- | ------- |
| month     | string | Numeric month (1-12) to filter slavas    | 12      |
| type      | string | Fasting type filter (`posna` or `mrsna`) | posna   |

**Example requests:**

```bash
curl https://slava-api-two.vercel.app/api/slavas
curl https://slava-api-two.vercel.app/api/slavas?month=12
curl https://slava-api-two.vercel.app/api/slavas?type=posna
```
