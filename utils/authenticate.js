const authenticate = (req, res, next) => {
    console.log('inside authenticate')
    next()
}

module.exports = { authenticate }
