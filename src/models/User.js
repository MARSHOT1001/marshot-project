import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, require: true },
  location: String,
});

userSchema.pre("save", async function () {
  console.log("User password: ", this.password);
  this.password = await bcrypt.hash(this.password, 5);
  console.log("Hashed password: ", this.password);
});

const User = mongoose.model("User", userSchema);
export default User;
