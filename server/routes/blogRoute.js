const express = require('express')
const allBlogs = require('../controllers/allBlogs')
const allUsersBlog = require('../controllers/allUsersBlog')
const createBlog = require('../controllers/createBlogs')
const updateBlogs = require('../controllers/updateBlogs')
const deleteBlogs = require('../controllers/deleteBlogs')
const authMiddleware = require('../middleware/authMiddleware')
const router = express.Router()

// GET ALL BLOGS OF ALL USERS - PUBLIC
router.get('/allblogs', allUsersBlog)

// GET BLOG FOR LOGGED-IN USER ONLY
router.get('/myblogs', authMiddleware, allBlogs)

// POST A NEW BLOG FOR LOGGED-IN USER
router.post('/myblogs', authMiddleware, createBlog)

// PUT DATA - FOR LOGGED-IN USER ONLY
router.put('/blogs/:id', updateBlogs)

// DELETE DATA - FOR LOGGED-IN USER ONLY
router.delete('/blogs/:id', deleteBlogs)

module.exports = router