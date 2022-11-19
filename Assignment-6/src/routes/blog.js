const router = require('express').Router();
const Blog = require('../models/Blog');
const bodyParser = require('body-parser');

// Your routing code goes here
router.use(bodyParser.json())

router.get('/blog', async (req, res) => {
    // console.log(req.query)
    try {
        let page = req.query.page;
        let search = req.query.search;
        const blog = await Blog.find({ topic: search }).skip((page - 1) * 10).limit(10);
            res.status(200).json({
                status: 'success',
                data: blog
            })
            
    } catch (e) {
        res.status(500).json({
            status: "failed",
            messege: e
        })
    }
})
router.post('/blog', async (req, res) => {
    try {
        const blog = await Blog.create(req.body)
        res.status(200).json({
            status: 'success',
            result: blog
        })
    } catch (e) {
        res.status(500).json({
            status: 'failed',
            messege: e.messege
        })
    }
})
router.put('/blog/:id', async (req, res) => {
    // console.log(req.params)
    try {
        const blog = await Blog.findOneAndUpdate({ _id: req.params.id }, req.body);
        res.status(200).json({
            status: 'success',
            result: blog
        })
    } catch (e) {
        res.status(500).json({
            status: 'failed',
            messege: e
        })
    }
})
router.delete('/blog/:id', async (req, res) => {
    // console.log(req.params)
    try {
        const blog = await Blog.findOneAndDelete({ _id: req.params.id });
        res.status(200).json({
            status: 'success',
            result: blog
        })
    } catch (e) {
        res.status(500).json({
            status: 'failed',
            messege: e.messege
        })
    }
})
router.get('*', (req, res) => {
    res.status(404).json({
        statue: 'failed',
        messege: 'invalid request'
    })
})


module.exports = router;