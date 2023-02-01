export const marstube = (req, res) =>
  res.render("marstube/home", { pageTitle: "MarsTube" });
export const watch = (req, res) =>
  res.render("marstube/watch", { pageTitle: "Watch" });
export const edit = (req, res) =>
  res.render("marstube/edit", { pageTitle: "Edit" });
export const upload = (req, res) =>
  res.render("marstube/upload", { pageTitle: "Upload" });
export const deleteVideo = (req, res) => res.send("Delete Video");
export const search = (req, res) => res.send("Search Videos");
