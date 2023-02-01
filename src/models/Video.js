import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    mixLength: 2,
    maxLength: 80,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minLength: 5,
    maxLength: 2000,
  },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

const Video = mongoose.model("Video", videoSchema);
export default Video;
