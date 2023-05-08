const express = require('express')
const app = express()

// middleware
app.use(express.json())

// routes
app.use('/api/v1/wanderlust', wanderlust)


app.get('/', (req, res) => {
    res.send("Helloooooooooooooooooo")
})


app.listen(5000, console.log('App is listening on port 5000'))