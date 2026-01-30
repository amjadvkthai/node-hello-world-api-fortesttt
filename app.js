// Import the express module
const express = require('express');
// Create an instance of express
const app = express();
// Define the port number
const PORT = 3000;

// Define a route that responds with "Hello, World!" to GET requests on the root path '/'
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
