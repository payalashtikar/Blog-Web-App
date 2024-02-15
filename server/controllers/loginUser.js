const User = require("../models/userModel");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const jwtSecret = process.env.SECRET_KEY

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).json({ error: "please fill all fields" });
        }
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(422).json({ error: "invalid email or password" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(422).json({ error: "invalid credentials" });
        }
        const token = jwt.sign({ _id: user._id, }, jwtSecret, { expiresIn: '10hr' });
        res.status(200).json({ message: "login sucessfull", token: token });
    } catch (error) {
        console.log(error);
    }
}
module.exports = loginUser;  