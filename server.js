// server.js - Run with: node server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/deposit', (req, res) => {
    const { amount, crypto } = req.body;
    if (!amount || !crypto) {
        return res.status(400).json({ error: 'Missing amount or crypto.' });
    }
    // Simulate deposit processing (e.g., save to DB, integrate payment)
    console.log(`Processed deposit: $${amount} into ${crypto}`);
    res.json({ success: true, message: 'Deposit processed successfully.' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
