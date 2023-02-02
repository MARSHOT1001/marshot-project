import User from "../models/User";

export const getSignup = (req, res) => {
  res.render("signup", { pageTitle: "Sign Up" });
};

export const postSignup = async (req, res) => {
  const { name, username, email, password, check_password, location } =
    req.body;
  const pageTitle = "Sign Up";
  if (password !== check_password) {
    return res.render("signup", {
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
  await User.create({
    name,
    username,
    email,
    password,
    location,
  });
  return res.redirect("/signin");
};

export const signin = (req, res) => res.send("Sign In");

export const signout = (req, res) => res.send("Sign Out");

export const profile = (req, res) => res.send("See Profile");

export const edit = (req, res) => res.send("See Profile");

export const remove = (req, res) => res.send("See Profile");
