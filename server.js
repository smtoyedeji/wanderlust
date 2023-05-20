require('dotenv').config()
const express = require('express')
const multer = require('multer')
const upload = multer({ dest: '/uploads'})
const app = express()
const wanderlust = require('./routes/wanderlust')
const connectDB = require('./db/connectDB')
// const notFound = require('./middleware/notFound')



// middleware
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Helloooooooooooooooooo")
})

// routes
app.use('/api/v1/wanderlust', wanderlust)
// app.use(notFound)


app.post('/place', upload.single('place'), function (req, res, next) {
    // req.file is the `avatar` file
    // console.log(req.file)
    // req.body will hold the text fields, if there were any
    console.log(req.body)
    res.send(req.file)
})


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