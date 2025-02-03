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

- `GET /data`
  - Description: Retrieves sample data
  - Response: 
    ```json
    {
      "message": "Here is your data",
      "data": {
        "items": [
          { "id": 1, "name": "Item 1" },
          { "id": 2, "name": "Item 2" },
          { "id": 3, "name": "Item 3" }
        ]
      }
    }
    ```

#### POST Endpoints

- `POST /data`
  - Description: Accepts data submissions
  - Request: JSON data in request body
  - Response: `{ "message": "Data received", "data": "<submitted-data>" }`

#### PUT Endpoints

- `PUT /data`
  - Description: Updates entire resource
  - Request: JSON data in request body
  - Validation:
    - Request body cannot be empty
    - No fields can be empty strings or null
  - Response: `{ "message": "Data updated successfully", "data": "<updated-data>" }`

#### PATCH Endpoints

- `PATCH /data`
  - Description: Partially updates resource
  - Request: JSON data in request body
  - Validation:
    - Request body cannot be empty
    - No fields can be empty strings or null
  - Response: `{ "message": "Data patched successfully", "data": "<patched-data>" }`

#### DELETE Endpoints

- `DELETE /data`
  - Description: Deletes the resource
  - Response: `{ "message": "Resource deleted successfully" }`

### Error Handling

The server includes comprehensive error handling:

- 404 Not Found:
  ```json
  {
    "error": "Not Found"
  }
  ```

- 400 Bad Request (Invalid JSON):
  ```json
  {
    "error": "Invalid JSON format"
  }
  ```

- 400 Bad Request (Empty Data):
  ```json
  {
    "error": "Request body cannot be empty"
  }
  ```

- 400 Bad Request (Empty Fields):
  ```json
  {
    "error": "Field 'fieldName' cannot be empty"
  }
  ```

- 500 Internal Server Error:
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

## Content Type

All endpoints return responses with `Content-Type: application/json`.

