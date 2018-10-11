const express = require('express')
// const { ObjectId } = require('mongodb')
const mongoUtils = require('./../utils/mongo-utils')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        let db = await mongoUtils.connectToServer()
        let result = await db
            .collection('transactions')
            .find({})
            .toArray()

        if (!result) {
            throw new Error('unable to get transactions from transactions collection')
        }
        // sends an array of attribute documents
        res.status(200).send(result)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/', async (req, res) => {
    try {
        let db = await mongoUtils.connectToServer()
        let result = await db
            .collection('transactions')
            .insert(req.body)

        if (!result.ops) {
            throw new Error('unable to insert transactions doc into transactions collection')
        }
        // send an array with the inserted document with its _id
        res.status(200).send(result.ops)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router
