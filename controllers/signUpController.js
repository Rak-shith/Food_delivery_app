import Sign_up from "../models/Sign_up.js";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE_IN,
    });
};

export const signUp = async (req, res) => {
    try {
        const newUser = await Sign_up.create({
            name: req.body.name,
            email: req.body.email,
            mobile_no: req.body.mobile_no,
            password: await bcrypt.hash(req.body.password, 3),
        });

        const token = signToken({ id: newUser._id });

        res.status(201).json({
            status: "success",
            token,
            data: {
                user: newUser,
            },
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            message: "Something went wrong",
        });
    }
};

export const logIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({
                message: "please provide valid email or password",
            });
        }

        const user = await Sign_up.findOne({ email });
        const isMatch = user && (await bcrypt.compare(password, user.password));
        if (!user || !isMatch) {
            return res
                .status(400)
                .json({ message: "Incorrect password or email" });
        }

        const token = signToken(user._id);

        res.status(200).json({
            status: "success",
            token,
        });
    } catch (err) {
        res.status(500).json({
            status: "fail",
            message: "Something went wrong",
        });
    }
};
