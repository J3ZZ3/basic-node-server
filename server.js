const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const routes = {
  'GET': {
    '/': (req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Welcome to the homepage!' }));
    },
    '/about': (req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'This is the about page.' }));
    },
    '/contact': (req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'This is the contact page.' }));
    },
    '/data': (req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({
        message: 'Here is your data',
        data: {
          items: [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            { id: 3, name: 'Item 3' }
          ]
        }
      }));
    }
  },
  'POST': {
    '/data': (req, res) => {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Data received', data: body }));
      });
    }
  },
  'PUT': {
    '/data': (req, res) => {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        try {
          const parsedBody = JSON.parse(body);
          
          if (!parsedBody || Object.keys(parsedBody).length === 0) {
            return handleError(res, 400, 'Request body cannot be empty');
          }

          for (const [key, value] of Object.entries(parsedBody)) {
            if (value === '' || value === null) {
              return handleError(res, 400, `Field '${key}' cannot be empty`);
            }
          }

          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ 
            message: 'Data updated successfully', 
            data: parsedBody 
          }));
        } catch (error) {
          handleError(res, 400, 'Invalid JSON format');
        }
      });
    }
  },
  'PATCH': {
    '/data': (req, res) => {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        try {
          const parsedBody = JSON.parse(body);
          
          if (!parsedBody || Object.keys(parsedBody).length === 0) {
            return handleError(res, 400, 'Request body cannot be empty');
          }

          for (const [key, value] of Object.entries(parsedBody)) {
            if (value === '' || value === null) {
              return handleError(res, 400, `Field '${key}' cannot be empty`);
            }
          }

          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ 
            message: 'Data patched successfully', 
            data: parsedBody 
          }));
        } catch (error) {
          handleError(res, 400, 'Invalid JSON format');
        }
      });
    }
  },
  'DELETE': {
    '/data': (req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ 
        message: 'Resource deleted successfully' 
      }));
    }
  }
};

const handleError = (res, statusCode, message) => {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ 
    error: message 
  }));
};

const server = http.createServer((req, res) => {
  try {
    const parsedUrl = url.parse(req.url, true);
    const routeHandler = routes[req.method]?.[parsedUrl.pathname];

    if (routeHandler) {
      routeHandler(req, res);
    } else {
      handleError(res, 404, 'Not Found');
    }
  } catch (error) {
    handleError(res, 500, 'Internal Server Error');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
