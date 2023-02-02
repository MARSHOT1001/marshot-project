import User from "../models/User";

export const getSignup = (req, res) => {
  res.render("signup", { pageTitle: "Sign Up" });
};

export const postSignup = async (req, res) => {
  const { name, username, email, password, location } = req.body;
  const pageTitle = "Sign Up";
  const usernameExists = await User.exists({ username });
  if (usernameExists) {
    return res.render("signup", {
      pageTitle: "Sign Up",
      errorMessage: "This username is already taken.",
    });
  }
  const emailExists = await User.exists({ email });
  if (emailExists) {
    return res.render("signup", {
      pageTitle,
      errorMessage: "This email is already taken.",
    });
  }
  await User.create({
    name,
    username,
    email,
    password,
    location,
  });
  return res.redirect("/signin");
};

export const signin = (req, res) => res.send("Login");

export const signout = (req, res) => res.send("Sign Out");

export const profile = (req, res) => res.send("See Profile");

export const edit = (req, res) => res.send("See Profile");

export const remove = (req, res) => res.send("See Profile");
