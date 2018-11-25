const express = require('express')
const { generateAuthToken, removeAuthToken, authenticate } = require('./../utils/authenticate')

const router = express.Router()

// to authenticate user
router.get('/me', authenticate, (req, res) => {
    res.status(200).send()
})

// login
router.post('/login', (req, res, next) => {
    if (req.body.password === process.env.LEDGER_PASSWORD) {
        const token = generateAuthToken(req, res, next)
        res.header('x-auth', token).status(200).send()
    }

    res.status(400).send()
})

// logout
router.delete('/me/token', authenticate, removeAuthToken, (req, res) => {
    res.status(200).send()
})


module.exports = router
