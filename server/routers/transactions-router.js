import express from 'express';
import shortid from 'shortid';

const transactionsRouter = express.Router()

import { db } from '../db.js';

transactionsRouter.get('/', (req, res) => {
    let result = db.data.transactions
    res.send(result)
})

transactionsRouter.post('/', async (req, res) => {
    let transaction = {
        id: shortid.generate(),
        ...req.body,
        expense: Number(req.body.expense)
    }

    db.data.transactions.push(transaction)
    await db.write()
    res.send(transaction)
})

transactionsRouter.delete('/:id', async (req, res) => {
    let transaction = db.data.transactions.find(e => e.id == req.params.id)
    db.data.transactions = db.data.transactions.filter(e => e.id != req.params.id)

    await db.write()
    res.send(transaction)
})

transactionsRouter.patch('/:id', async (req, res) => {
    let transaction = db.data.transactions.find(e => e.id == req.params.id)
    let index = db.data.transactions.findIndex(e => e.id == req.params.id)

    db.data.transactions[index] = {
        ...transaction,
        ...req.body,
        expense: Number(req.body.expense)
    }

    transaction = db.data.transactions[index]

    await db.write()
    res.send(transaction)
})

export { transactionsRouter }
