import Video from "../models/Video";

export const marstube = (req, res) => {
  Video.find();
  return res.render("marstube/home", { pageTitle: "MarsTube", videos });
};

export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("marstube/watch", {
    pageTitle: `Watching ${video.title}`,
    video,
  });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("marstube/edit", {
    pageTitle: `Editing ${video.title}`,
    video,
  });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/marstube/${id}`);
};

export const upload = (req, res) =>
  res.render("marstube/upload", { pageTitle: "Upload" });

export const deleteVideo = (req, res) => res.send("Delete Video");

export const search = (req, res) => res.send("Search Videos");
