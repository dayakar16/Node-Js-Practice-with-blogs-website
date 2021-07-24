const express = require('express')
const Blog = require('../models/blog')
const router = express.Router();
const blogcontroller = require('../controller/blogController')

router.get('/create',blogcontroller.blog_create)

router.get('/', blogcontroller.blog_index)

router.post('/',blogcontroller.blog_post)

router.get('/:id',blogcontroller.blog_get)

router.delete('/:id',blogcontroller.blog_delete)

module.exports = router;