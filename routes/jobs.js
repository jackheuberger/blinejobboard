const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')

const Job = require('../models/Job')

// @desc    Show page of current jobs posted by this user
// @route   GET /jobs
router.get('/', ensureAuth, async (req, res) => {
    //CHANGE TO DELETE VIEW
    try{
        const jobs = await Job.find({ user: req.user })
            .populate('user')
            .sort({createdAt: 'desc'})
            .lean()
        res.render('user', {
            name: req.user.displayName,
            jobs
        })
    } catch (err) {
        console.error(err)
    }
})

// @desc    Show add page
// @route   GET /jobs/add
router.get('/add', ensureAuth, (req, res) => {
    //CHANGE TO DELETE VIEW
    res.render('jobs/add', {
        name: req.user.displayName,
        email: req.user.email
    })
})

// @desc    Process add form
// @route   POST /jobs
router.post('/add', ensureAuth, async (req, res) => {
    try {
        req.body.user = req.user.id
        await Job.create(req.body)
        res.redirect('/')
    } catch (err) {
        console.error(err)
        res.render('error/500')
    }
})

// @desc    Show edit page
// @route   POST /jobs/edit/:id
router.get('/edit/:id', ensureAuth, async (req, res) => {
    const job = await Job.findOne({ 
        _id: req.params.id
    }).lean()

    if(!job){
        return res.render('error/404')
    }

    if(job.user != req.user.id){
        res.redirect('/')
    } else {
        res.render('jobs/edit', {
            job
        })
    }
})

// @desc    Update job listing
// @route   PUT /jobs/:id
router.put('/:id', ensureAuth, async (req, res) => {
    try {
        let job = await Job.findById(req.params.id).lean()

        if(!job) {
            return res.render('error/404')
        }

        if(job.user != req.user.id){
            res.redirect('/')
        } else {
            job = await Job.findOneAndUpdate({ _id: req.params.id }, req.body, {
                new: true,
                runValidators: true
            })
            res.redirect('/')
        }
    } catch (err) {
        console.error(err)
        return res.render('error/500')
    }
})

router.get('/status/:id', ensureAuth, async (req, res) => {
    try {
        let job = await Job.findById(req.params.id).lean()

        if(!job) {
            return res.render('error/404')
        }

        if(job.user != req.user.id){
            res.redirect('/')
        } else {
            let s = {}
            if(job.status == 'open'){
                s.status = 'closed'
            } else {
                s.status = 'open'
            }
            job = await Job.findOneAndUpdate({ _id: req.params.id }, s) 
            res.redirect('/')
        }
    } catch (err) {
        console.error(err)
        return res.render('error/500')
    }
})

module.exports = router