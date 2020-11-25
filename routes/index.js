const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')

const Job = require('../models/Job')

// @desc    Login/Landing page
// @route   GET /
router.get('/', ensureGuest, (req, res) => {
    res.render('login', {
        user: false,
        layout: "login"
    })
})

// @desc    Dashboard
// @route   GET /dashboard
router.get('/dashboard', ensureAuth, async (req, res) => {
    try {
        const jobs = await Job.find({ status: 'open' })
            .populate('user')
            .sort({createdAt: 'desc'})
            .lean()
        res.render('dashboard', {
            name: req.user.displayName,
            student: req.user.student,
            jobs
        })
    } catch (err) {
        console.error(err)
    }



})

module.exports = router