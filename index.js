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

// Start the server and listen for incoming requests on all network interfaces
app.listen(PORT, '0.0.0.0', () => { // Add '0.0.0.0' here
  console.log(`Server running at http://0.0.0.0:${PORT}/`); // Optional: update log message
});
