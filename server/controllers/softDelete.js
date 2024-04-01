const Blog = require('../models/blogModel');

// Soft delete a document
const softDeleteDocument = async (id) => {
    try {
        const doc = await Blog.findByIdAndUpdate(
            id,
            {
                isDeleted: true,
                deletedAt: new Date(),
            },
            { new: true } // Return the updated document
        );
        return doc;
    } catch (error) {
        throw error;
    }
};

module.exports = { softDeleteDocument };
