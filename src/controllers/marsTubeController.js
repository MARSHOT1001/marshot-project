import Video from "../models/Video";

export const marstube = (req, res) => {
  Video.find({}, (error, videos) => {
    console.log("errors", error);
    console.log("videos", videos);
  });
  return res.render("marstube/home", { pageTitle: "MarsTube", videos: [] });
};

export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("marstube/watch", {
    pageTitle: `Watching`,
  });
};

export const getEdit = (req, res) =>
  res.render("marstube/edit", {
    pageTitle: `Editing`,
  });
export const postUpload = (req, res) => {
  res.send("/");
};
export const upload = (req, res) =>
  res.render("marstube/upload", { pageTitle: "Upload" });

export const deleteVideo = (req, res) => res.send("Delete Video");

export const search = (req, res) => res.send("Search Videos");
