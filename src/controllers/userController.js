export const signin = (req, res) =>
  res.render("user/signin", { pageTitle: "Sign In" });
export const signup = (req, res) =>
  res.render("user/signup", { pageTitle: "Sign Up" });
export const signout = (req, res) => res.send("Sign Out");
export const profile = (req, res) =>
  res.render("user/profile", { pageTitle: "Your Profile" });
