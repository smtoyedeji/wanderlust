require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const wanderlust = require('./routes/wanderlust')
const connectDB = require('./db/connectDB')
// const notFound = require('./middleware/notFound')



// middleware
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("Helloooooooooooooooooo")
})

// routes
app.use('/api/v1/wanderlust', wanderlust)
// app.use(notFound)



const port = process.env.PORT || 8000



const start = async () => {
    try {
        await connectDB(process.env.CONNECTION_STRING)
        app.listen(port, console.log('server is listening on port ' + port))
    } catch (err) {
        console.log(err)
    }
}


start() 