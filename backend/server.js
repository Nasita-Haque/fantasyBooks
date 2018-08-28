const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('*', (req, res) => {
  res.end('Hello Express');
});

app.listen(port, () => console.log(`Listening on port ${port}`));