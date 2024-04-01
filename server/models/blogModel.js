const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    isDeleted: { type: Boolean },
    deletedAt: { type: Date },
    user: { type: mongoose.Types.ObjectId, ref: "User" },
},
    { timestamps: true }
)

const Blog = mongoose.model("Blog", blogSchema)
module.exports = Blog;