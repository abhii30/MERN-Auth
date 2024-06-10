import express from "express";
import bcrypt from "bcrypt";
const router = express.Router();
import User from "../models/User.js";
import jwt from "jsonwebtoken";

router.post("/register", async (req, res) => {
  const { email, username, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    console.log("User already exists");
    return res.status(400).json({ message: "User already exists" });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, username, password: hashedPassword });
    await newUser.save();
    res.status(200).json({ message: "User created successfully" });
    console.log(newUser);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "User does not exist" });
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).json({ message: "Incorrect password" });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "2h",
  });
  res.cookie("token", token, { httpOnly: true, maxAge: 2 * 60 * 60 * 1000 }); // 2 hours
  res.status(200).json({ message: "Login successful" });
  console.log(token);
});

export default router;
