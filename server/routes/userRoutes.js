import express from "express";
import bcrypt from "bcrypt";
const router = express.Router();
import User from "../models/User.js";

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
  try {
    if (await bcrypt.compare(password, user.password)) {
      res.status(200).json({ message: "User logged in successfully" });
      console.log("User logged in successfully");
    } else {
      res.status(400).json({ message: "Invalid credentials" });
      console.log("Invalid credentials");
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
    console.log(error);
  }
});

export default router;
