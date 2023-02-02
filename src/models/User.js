import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  socialOnly: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatarUrl: String,
  username: { type: String, required: true },
  password: { type: String, require: true },
  location: String,
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 5);
});

const User = mongoose.model("User", userSchema);
export default User;
