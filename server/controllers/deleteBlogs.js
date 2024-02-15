const Blog = require("../models/blogModel");

const deleteBlogs = async (req, res) => {
    try {
        const data = await Blog.findByIdAndDelete({ _id: req.params.id })
        res.status(200).json({ msg: "data deleted", data })
    }
    catch (error) {
        res.status(400).json({ error: error })
    }
}
module.exports = deleteBlogs;