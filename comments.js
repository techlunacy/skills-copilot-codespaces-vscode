// Create web server

// Import the express library
const express = require('express');

// Create an express application
const app = express();

// Define a port for the server to listen on
const port = 3000;

// Define an array of comments
const comments = [
  { id: 1, author: 'John Doe', text: 'A great article.' },
  { id: 2, author: 'Jane Doe', text: 'I disagree with John.' }
];

// Define a route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Define a route to get a specific comment
app.get('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find(comment => comment.id === id);
  res.json(comment);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});