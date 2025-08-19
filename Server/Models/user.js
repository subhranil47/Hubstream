import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // hashed password
  profilePic: {
    type: String,
    default: "https://www.w3schools.com/w3images/avatar2.png",
  },
  joined: { type: Date, default: Date.now },

  likedVideos: [
    { videoId: String, title: String, thumbnail: String, channel: String },
  ],
  playlists: [
    {
      name: String,
      videos: [
        { videoId: String, title: String, thumbnail: String, channel: String },
      ],
    },
  ],
});

export default mongoose.model("User", UserSchema);
