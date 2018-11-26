const { ObjectId } = require('mongodb')
const jwt = require('jsonwebtoken')

// generate once for each login
const generateAuthToken = (req, res, next) => {
    const _id = new ObjectId()
    const access = 'auth'
    let token = ''

    token = jwt.sign(
        { _id: _id.toHexString(), access },
        process.env.JWT_SECRET
    ).toString()

    process.env.TOKEN = token

    return token
}

const removeAuthToken = (req, res, next) => {
    process.env.TOKEN = ''
    next()
}

const authenticate = (req, res, next) => {
    const token = req.header('x-auth')

    if (token === process.env.TOKEN) {
        next()
    } else {
        res.status(400).send()
    }
}

module.exports = {
    authenticate,
    generateAuthToken,
    removeAuthToken
}
