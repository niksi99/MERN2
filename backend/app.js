const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Radi');
});

app.listen(1919, () => {
    console.log(`Radi na portu 1919`)
})