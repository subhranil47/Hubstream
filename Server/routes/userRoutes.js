import express from "express";
import User from "../Models/user.js";
import auth from "../Middleware/auth.js";

const router = express.Router();

// Get logged-in user profile
router.get("/me", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Update user profile
router.put("/update", auth, async (req, res) => {
  try {
    const { username, email, profilePic } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { username, email, profilePic },
      { new: true, runValidators: true }
    ).select("-password"); // Don't return password

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/liked", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("likedVideos");
    res.json(user.likedVideos);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


export default router;
