import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, require: true },
  location: String,
});

const User = mongoose.model("User", userSchema);
export default User;
