# Serbian Slava API

A simple REST API providing data about traditional Serbian slavas (patron saint days), with optional filters by month and fasting type.

---

## Features

- Retrieve a list of Serbian slavas
- Filter by month (1-12)
- Filter by fasting type (`posna` or `mrsna`)
- JSON response with UTF-8 encoding
- Deployed and hosted on [Vercel](https://vercel.com/)

---

## API Endpoints

### GET `/api/slavas`

Get the full list of slavas or filter by query parameters.

**Query Parameters:**

| Parameter | Type   | Description                              | Example |
| --------- | ------ | ---------------------------------------- | ------- |
| `month`   | string | Numeric month (1-12) to filter slavas    | `12`    |
| `type`    | string | Fasting type filter (`posna` or `mrsna`) | `posna` |

**Example requests:**

```bash
curl https://your-vercel-url.vercel.app/api/slavas
curl https://your-vercel-url.vercel.app/api/slavas?month=12
curl https://your-vercel-url.vercel.app/api/slavas?type=posna
```
