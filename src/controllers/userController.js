import User from "../models/User";

export const getSignup = (req, res) => {
  res.render("signup", { pageTitle: "Sign Up" });
};

export const postSignup = async (req, res) => {
  const { name, username, email, password, check_password, location } =
    req.body;
  const pageTitle = "Sign Up";
  if (password !== check_password) {
    return res.status(400).render("signup", {
      pageTitle,
      errorMessage: "Password confirmation does not match.",
    });
  }
  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (exists) {
    return res.render("signup", {
      pageTitle,
      errorMessage: "This username/email is already taken.",
    });
  }
  try {
    await User.create({
      name,
      username,
      email,
      password,
      location,
    });
    return res.redirect("/signin");
  } catch (error) {
    return res.status(400).render("signup", {
      pageTitle: "Sign Up",
      errorMessage: error._message,
    });
  }
};

export const getSignin = (req, res) => {
  res.render("signin", { pageTitle: "Sign In" });
};

export const postSignin = async (req, res) => {
  const { username, password } = req.body;
  const exists = await User.exists({ username });
  if (!exists) {
    return res.status(400).render("signin", {
      pageTitle: "Login",
      errorMessage: "An account with this username does not exists.",
    });
  }
  // check if password correct
  res.end();
};

export const signout = (req, res) => res.send("Sign Out");

export const profile = (req, res) => res.send("Your Profile");

export const edit = (req, res) => res.send("Edit Profile");

export const remove = (req, res) => res.send("Remove Profile");
