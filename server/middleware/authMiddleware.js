const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const jwtSecret = process.env.SECRET_KEY

const authMiddleware = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(400).json({ error: "you must login first !!" })
    }

    const token = authorization.split(' ')[1]
    if (!token) {
        return res.status(400).json({ error: "you must login first !!" })
    }

    jwt.verify(token, jwtSecret, (err, payload) => {
        if (err) {
            return res.status(401).json({ error: "Invalid token" })
        }
        const { _id } = payload
        User.findById(_id).then((userdata) => {
            if (!userdata) {
                return res.status(401).json({ error: "User not found !" })
            }
            req.user = userdata;
            next();
        })
    })
}
module.exports = authMiddleware;
