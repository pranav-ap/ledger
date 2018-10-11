const express = require('express')
const { ObjectId } = require('mongodb')
const mongoUtils = require('../utils/mongo-utils')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        let db = await mongoUtils.connectToDB()
        let result = await db
            .collection('transactions')
            .find({})
            .toArray()

        if (!result) {
            throw new Error('unable to get transactions from collection')
        }
        // sends an array of documents
        res.status(200).send(result)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/', async (req, res) => {
    try {
        let db = await mongoUtils.connectToDB()
        let result = await db
            .collection('transactions')
            .insertOne(req.body)

        if (!result) {
            throw new Error('unable to insert transaction doc into collection')
        }

        res.status(200).send(result.ops[0])
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/:id', async (req, res) => {
    let _id = ObjectId(req.params.id)

    try {
        let db = await mongoUtils.connectToDB()
        let result = await db.collection('transactions').findOneAndDelete({ _id })

        if (!result.ok) {
            throw new Error('Unable to delete transaction doc from transactions collection')
        }

        res.status(200).send(result)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router
