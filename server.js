// my_akinator_back/index.js
const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
