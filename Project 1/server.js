const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/submit', (req, res) => {
  const { name, email, phone, description } = req.body;
  console.log('Received request:', req.body);
  res.send(`<p>Request from ${name} saved successfully.</p>`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
