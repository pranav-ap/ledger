const express = require('express')
const { ObjectId } = require('mongodb')

const mongoUtils = require('../utils/mongo-utils')
const { authenticate } = require('../utils/authenticate')

const router = express.Router()


router.get('/:id', authenticate, async (req, res) => {
  let _id = ObjectId(req.params.id)

  try {
    let db = await mongoUtils.connectToDB()
    let result = await db
      .collection('users')
      .find({ _id })
      .toArray()

    if (!result) {
      throw new Error('Unable to get users from collection')
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
      .collection('users')
      .insertOne(req.body)

    if (!result) {
      throw new Error('Unable to insert transaction doc into collection')
    }

    res.status(200).send(result.ops[0])
  } catch (e) {
    res.status(400).send(e)
  }
})

router.delete('/:id', authenticate, async (req, res) => {
  let _id = ObjectId(req.params.id)

  try {
    let db = await mongoUtils.connectToDB()
    let result = await db
      .collection('users')
      .findOneAndDelete({ _id })

    if (!result.ok) {
      throw new Error('Unable to delete transaction doc from users collection')
    }

    res.status(200).send(result['value'])
  } catch (e) {
    res.status(400).send(e)
  }
})

module.exports = router
