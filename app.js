require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

const mongoose = require('mongoose')

const demoRouter = require('./routes/demoRoute')


app.get('/', (request, response) => {
    response.status(200).send({message:`It works!`})
})

app.use('/api/v1/demo', demoRouter)

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (errorMessage) => console.log(errorMessage))
db.once('open', () => console.log("Connected to db successfully"))

app.listen(PORT, console.log(`Server started running at http://localhost:3500/`))