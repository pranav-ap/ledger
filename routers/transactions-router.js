const db = require('./../utils/db.js')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    return db
        .get('posts')
        .find({})
        .value()
})

router.post('/', async (req, res) => {
    return db
        .get('posts')
        .push({ id: 1, title: 'lowdb is awesome' })
        .write()
})

router.delete('/:id', async (req, res) => {
    let _id = ObjectId(req.params.id)

    try {
        let db = await mongoUtils.connectToDB()
        let result = await db
            .collection('transactions')
            .findOneAndDelete({ _id })

        if (!result.ok) {
            throw new Error('Unable to delete transaction doc from transactions collection')
        }

        res.status(200).send(result['value'])
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router
