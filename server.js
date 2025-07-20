const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

let applications = [];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/apply', (req, res) => {
    const { name, email, grade, parent, motivation } = req.body;
    const entry = { name, email, grade, parent, motivation };
    applications.push(entry);
    res.send(`<li><strong>${name}</strong> - Grade ${grade} - ${email} - Parent: ${parent} - Reason: ${motivation}</li>`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
