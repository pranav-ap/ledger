const express = require('express')
const passport = require('passport')

const router = express.Router()

router.get('/google', () => {
    console.log('hello')
}, passport.authenticate('google', {
    scope: ['profile']
}))

// callback route for google to redirect to
router.get('/redirect',
    () => {
        console.log('in redirect')
    },
    passport.authenticate('google', { failureRedirect: '/ledger' }),
    function (req, res) {
        res.redirect('/ledger');
    })

router.get('/logout', () => {
    // handle with passport
    res.send('logging out');
})

module.exports = router
