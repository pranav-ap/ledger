require('dotenv').config()

const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/api/auth/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        console.log('passport callback function fired')
        console.log(profile)
    })
)

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT

const transactionsRouter = require('./routers/transactions-router')
const usersRouter = require('./routers/users-router')
const authRouter = require('./routers/auth-router')

app.use(express.static(path.resolve(__dirname, 'client', 'build')))
app.use(bodyParser.json())

app.use('/api/transactions', transactionsRouter)
app.use('/api/users', usersRouter)
app.use('/api/auth', authRouter)

// error handling middleware
app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send('Something broke!')
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
});

// listen for requests
app.listen(port, () => {
    console.log(`Express server listening to port ${port}`)
})

module.exports = {
    app
}
