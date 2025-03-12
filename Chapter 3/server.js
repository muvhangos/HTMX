import express from 'express';
const app = express()
app.use(express.static('public'));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Handle POST request to calculate BMI

    let currentPrice = 60;
    app.get('/get-price', (req, res) => {
        currentPrice = currentPrice + Math.random() * 2 - 1;
        res.send('$' + currentPrice.toFixed(1));
    });
    // Start the server
    app.listen(3000, () => {
        console.log('Server listening on port 3000');
    });