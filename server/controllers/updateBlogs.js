const Blog = require("../models/blogModel");

const updateBlogs = async (req, res) => {
    try {
        const data = await Blog.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        if (!data) {
            res.status(400).json({ msg: "data not found" })
        }
        res.status(200).json({ msg: "data updated", data })
    }
    catch (error) {
        res.status(400).json({ error: error })
    }
}
module.exports = updateBlogs