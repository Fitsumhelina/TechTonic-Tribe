// server/contact.js

const express = require('express');
const request = require('request');
const app = express();

const PORT = 5001; // Use a different port from your main server

app.get('/proxy/script.js', (req, res) => {
    const url = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
    request(url).pipe(res);
});

app.listen(PORT, () => {
    console.log(`Proxy server listening on port ${PORT}`);
});
