const express = require('express')
const shortid = require('shortid')
const router = express.Router()

const db = require('./../db/db.js')

const tran = 'transactions'

router.get('/', (req, res) => db.get(tran).value())

router.post('/', (req, res) => db
    .get(tran)
    .push({ id: shortid.generate(), ...req.body })
    .write())

router.delete('/:id', (req, res) => db.get(tran).remove({ id: req.params.id }).write())

router.patch('/:id', (req, res) => db.get(tran).find({ id: req.params.id }).assign(req.body).write())

module.exports = router
