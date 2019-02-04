const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const db = require('./db/db.js')
db.init()

const app = express()
const port = process.env.PORT

const transactionsRouter = require('./routers/transactions-router')

app.use(express.static(path.resolve(__dirname, 'client', 'build')))
app.use(bodyParser.json())

app.use('/api/transactions', transactionsRouter)

// error handling middleware
app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send('Something broke!')
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
});

// listen for requests
app.listen(port, () => {
    console.log(`Express server listening to port ${port}`)
})

module.exports = {
    app
}
