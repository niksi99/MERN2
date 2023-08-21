require('dotenv').config();
const express = require('express');
const cors = require('cors');
const MongoDB_Connection = require('./server/config/MongoDB');
const UserRoute = require('./server/routes/UserRoute')
const app = express();

MongoDB_Connection();

app.use(express.json())
app.use(cors())

app.use('/auth', UserRoute)

app.get('/', (req, res) => {
    res.send('Radi');
});

app.listen(1919, () => {
    console.log(`Radi na portu 1919`)
})