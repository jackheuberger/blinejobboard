const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')

const Job = require('../models/Job')

// @desc    Login/Landing page
// @route   GET /
router.get('/', ensureGuest, (req, res) => {
    res.render('login', {
        layout: "login"
    })
})

// @desc    Dashboard
// @route   GET /dashboard
router.get('/dashboard', ensureAuth, async (req, res) => {
    if (req.user.student) {
        try {
            const jobs = await Job.find({ status: 'open' })
                .populate('user')
                .sort({createdAt: 'desc'})
                .lean()
            res.render('dashboard', {
                name: req.user.displayName,
                jobs
            })
        } catch (err) {
            console.error(err)

        }
    } else {
        res.redirect('/jobs')
    }



})

module.exports = router