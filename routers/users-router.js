const express = require('express')
const { ObjectId } = require('mongodb')
const jwt = require('jsonwebtoken')

const mongoUtils = require('../utils/mongo-utils')
const { authenticate } = require('../utils/authenticate')

const router = express.Router()

// generate once for each login
const generateAuthToken = (req, res, next) => {
  const _id = new ObjectId()
  const access = 'auth'
  const token = jwt.sign(
    { _id: _id.toHexString(), access },
    process.env.JWT_SECRET
  ).toString()

  process.env.token = token

  return token
}

const removeAuthToken = (req, res, next) => {
  // delete process.env.token
  process.env.token = ''
}

// to authenticate user
router.get('/me', authenticate, (req, res) => {
  res.status(200).send()
})

// login
router.post('/login', (req, res) => {
  if (req.body.password !== process.env.PASSWORD) {
    res.status(400).send()
  }

  const token = generateAuthToken()
  res.header('x-auth', token).status(200).send()
})

// logout
router.delete('/me/token', authenticate, (req, res) => {
  removeAuthToken()
  res.status(200).send()
})

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
