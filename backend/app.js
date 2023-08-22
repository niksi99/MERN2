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

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.listen(1919, () => {
    console.log(`Radi na portu 1919`)
})