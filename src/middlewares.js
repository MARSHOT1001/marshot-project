export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "MarsTube";
  res.locals.loggedInUser = req.session.user || {};
  next();
};
