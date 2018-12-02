require('dotenv').config()

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const OktaJwtVerifier = require('@okta/jwt-verifier')

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: "https://dev-654158.oktapreview.com/oauth2/default",
  clientId: "0oahyyfujmLohEuhq0h7",
  assertClaims: {
    aud: 'api://default',
  }
})

const app = express()
const port = process.env.PORT

const transactionsRouter = require('./routers/transactions-router')

app.use(express.static(path.resolve(__dirname, 'client', 'build')))
app.use(bodyParser.json())

const authentication = (req, res, next) => {
  const token = req.header('x-auth')

  oktaJwtVerifier.verifyAccessToken(token)
    .then(jwt => {
      // req.jwt = jwt
      next()
    })
    .catch(err => {
      res.status(401).send(err)
    })
}

// ROUTES
app.use('/api/transactions', authentication, transactionsRouter)

// error handling middleware
app.use((err, req, res, next) => {
  console.log(err.stack)
  res.status(500).send('Something broke!')
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

// listen for requests
app.listen(port, () => {
  console.log(`Express server listening to port ${port}`)
})

module.exports = {
  app
}
