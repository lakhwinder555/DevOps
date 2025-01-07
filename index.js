const express = require('express');
const app = express();

// Default route
app.get('/', (req, res) => {
  res.send('Lakhwinder singh');
});

// Listen on port 80 for local development (if possible) and the port provided by Azure (process.env.PORT)
const port = process.env.PORT || 5000;

// Azure environment automatically binds to a port, so we need to listen on that
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

// Additionally listen on port 80 for local development (make sure you have permission to use port 80 on Windows)
//const localPort = 80;

// app.listen(localPort, '0.0.0.0', () => {
//   console.log(`Example app also listening on port ${localPort} (for local development)`);
// });
