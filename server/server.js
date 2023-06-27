// Database Setup
import { db } from './db.js'
console.log('Total Transactions in DB : ', db.data.transactions.length)

// Server Setup

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 5000

app.use(express.static(path.resolve('../client', 'build')))
app.use(bodyParser.json())

import { transactionsRouter } from './routers/transactions-router.js'
app.use('/api/transactions', transactionsRouter)

// error handling middleware
app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send('Something broke!')
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve('../client', 'build', 'index.html'))
});

// listen for requests
app.listen(port, () => {
    console.log(`Express server listening to port ${port}`)
})

export {
    app
}
