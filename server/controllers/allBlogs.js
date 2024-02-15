const Blog = require("../models/blogModel");

const allBlogs = async (req, res) => {
    try {
        const myblogs = await Blog.find({ user: req.user._id }).populate('user', 'username');
        res.status(200).json(myblogs);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
module.exports = allBlogs;