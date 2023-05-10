const express = require('express')
const app = express()
const wanderlust = require('./routes/wanderlust')
require('dotenv').config()
const connectDB = require('./db/connectDB')



// middleware
app.use(express.json())


app.get('/', (req, res) => {
    res.send("Helloooooooooooooooooo")
})

// routes
app.use('/api/v1/wanderlust', wanderlust)

const port = 8000


const start = async () => {
    try {
        await connectDB(process.env.CONNECTION_STRING)
        app.listen(port, console.log('server is listening on port ' + port))
    } catch (err) {
        console.log(err)
    }
}


start() 