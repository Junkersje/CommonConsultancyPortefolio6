const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const controller = require('./controller.js');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the controller for handling API routes
app.use('/api', controller);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



