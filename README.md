# Basic Node.js Server

A simple HTTP server built with Node.js native `http` module that handles different routes and methods.

## Setup

1. Make sure you have Node.js installed on your system
2. Clone this repository
3. Run the server:

```bash
node server.js
```

4. Open your browser and navigate to `http://localhost:3000` to see the server in action.

## Server Details

The server runs on `http://127.0.0.1:3000` by default.

### Available Endpoints

#### GET Endpoints

- `GET /`
  - Description: Homepage
  - Response: `{ "message": "Welcome to the homepage!" }`

- `GET /about`
  - Description: About page
  - Response: `{ "message": "This is the about page." }`

- `GET /contact`
  - Description: Contact page
  - Response: `{ "message": "This is the contact page." }`

#### POST Endpoints

- `POST /data`
  - Description: Accepts data submissions
  - Request: Any data in request body
  - Response: `{ "message": "Data received", "data": "<submitted-data>" }`

### Error Handling

- Any undefined routes will return a 404 response:
  ```json
  {
    "error": "Not Found"
  }
  ```

