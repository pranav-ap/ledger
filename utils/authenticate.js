const mongoUtils = require('./mongo-utils')

const authenticate = async (req, res, next) => {
    const token = req.header('x-auth')

    if (token === process.env.token) {
        next()
    } else {
        res.status(400).send()
    }
    try {
        let db = await mongoUtils.connectToDB()
        let result = await db
            .collection('users')
            .find({ token })
            .toArray()

        if (!result) {
            throw new Error('Unable to get users from collection')
        }
        // sends an array of documents
        res.status(200).send(result)
    } catch (e) {
        res.status(400).send(e)
    }
}

module.exports = { authenticate }
