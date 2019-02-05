const express = require('express')
const shortid = require('shortid')
const router = express.Router()

const db = require('../db').db

const tran = 'transactions'

router.get('/', (req, res) => {
    let result = db.get(tran).value()
    console.log('get result', result)
    res.send(result)
})

router.post('/', (req, res) => {
    let result = db.get(tran).push({ id: shortid.generate(), ...req.body }).write()
    console.log('post result', result)
    res.send(result)
})

router.delete('/:id', (req, res) => {
    let result = db.get(tran).remove({ id: req.params.id }).write()
    console.log('delete result', result)
    res.send(result)
})

router.patch('/:id', (req, res) => {
    let result = db.get(tran).find({ id: req.params.id }).assign(req.body).write()
    console.log('patch result', result)
    res.send(result)
})

module.exports = router
