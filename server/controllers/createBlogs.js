const Blog = require("../models/blogModel");

const createBlog = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newBlog = new Blog({
            title,
            description,
            user: req.user._id // Associate the blog with the logged-in user
        });
        await newBlog.save();
        res.status(200).json(newBlog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
module.exports = createBlog;