const Blog = require("../models/blogModel")

const allUsersBlog = async (req, res) => {
    try {
        const blogs = await Blog.find({}).populate('user', 'username')
        console.log('blogs : ', blogs)
        res.status(200).json(blogs)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}
module.exports = allUsersBlog;