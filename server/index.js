const express = require('express')
const app = express();
const dotEnv = require('dotenv')
dotEnv.config();
const port = process.env.PORT
const dbconnection = require('./db/dbConnection')
const cors = require('cors')

dbconnection

//middleware
app.use(express.json())
app.use(cors());
app.use(require('./routes/userRoute'))
app.use(require('./routes/blogRoute'))


app.get('/', async (req, res) => {
    res.end("hello")
})

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`first-api is running on port ` + port);
})