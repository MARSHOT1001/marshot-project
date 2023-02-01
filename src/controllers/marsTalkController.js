export const marsTalk = (req, res) =>
  res.render("marstalk/home", { pageTitle: "MarsTalk" });
export const friends = (req, res) =>
  res.render("marstalk/friends", { pageTitle: "Friends" });
export const chats = (req, res) =>
  res.render("marstalk/chats", { pageTitle: "Chats" });
export const views = (req, res) =>
  res.render("marstalk/views", { pageTitle: "Views" });
export const shopping = (req, res) =>
  res.render("marstalk/shopping", { pageTitle: "Shopping" });
export const more = (req, res) =>
  res.render("marstalk/more", { pageTitle: "More" });
