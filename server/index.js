const express = require('express')
const app = express();
const dotEnv = require('dotenv')
dotEnv.config();
const port = process.env.PORT
const dbconnection = require('./db/dbConnection')

dbconnection


app.get('/', async (req, res) => {
    res.end("hello")
})

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`first-api is running on port ` + port);
})