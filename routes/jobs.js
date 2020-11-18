const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')

const Job = require('../models/Job')

// @desc    Show page of current jobs posted by this user
// @route   GET /jobs
router.get('/', ensureAuth, (req, res) => {
    //CHANGE TO DELETE VIEW
    res.render('poster', {
        name: req.user.displayName,
        email: req.user.email
    })
})

// @desc    Show add page
// @route   GET /jobs/add
/*router.get('/', ensureAuth, (req, res) => {
    //CHANGE TO DELETE VIEW
    res.render('poster', {
        name: req.user.displayName,
        email: req.user.email
    })
})*/

// @desc    Process add form
// @route   POST /jobs
router.post('/', ensureAuth, async (req, res) => {
    try {
        req.body.user = req.user.id
        await Job.create(req.body)
        res.redirect('/')
    } catch (err) {
        console.error(err)
        res.render('error/500')
    }
})


module.exports = router