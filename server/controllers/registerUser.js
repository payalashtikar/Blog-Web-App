const User = require("../models/userModel");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    if (!email || !username || !password) {
        return res.status(400).json({ error: 'please fill all fields' });
    }
    try {
        const user = await User.findOne({ email: email });
        if (user) {
            return res.status(400).json({ error: 'user already exists' });
        }
        const Hashpassword = await bcrypt.hash(password, 12)
        const newUser = new User({ username, email, password: Hashpassword });

        await newUser.save();
        return res.status(200).json(newUser);
    }
    catch (err) {
        return res.status(400).json({ error: err.message });
    }
}

module.exports = registerUser;