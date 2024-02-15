const mongoose = require('mongoose')
const DB = process.env.DB

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(DB, connectionParams)
    .then(() => console.log('DB CONNECTION SUCCESS'))
    .catch(() => console.log('DB CONNECTION ERROR'))