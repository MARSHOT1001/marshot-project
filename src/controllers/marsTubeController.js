import Video from "../models/Video";

export const marstube = async (req, res) => {
  const videos = await Video.find({});
  return res.render("marstube/home", {
    pageTitle: "MarsTube",
    videos,
  });
};

export const getUpload = (req, res) => {
  res.render("marstube/upload", { pageTitle: "Upload" });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags: hashtags.split(",").map((word) => `#${word}`),
    });
    return res.redirect("/marstube");
  } catch (error) {
    return res.render("marstube/upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};

export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (video) {
    return res.render("marstube/watch", {
      pageTitle: video.title,
      video: video,
    });
  }
  return res.render("marstube/404", { pageTitle: "Video not found" });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("marstube/edit", {
    pageTitle: `Editing`,
  });
};

export const postEdit = (req, res) => {
  const { title, description, hashtags } = req.body;
  console.log(title, description, hashtags);
  return res.redirect(`/marstube/edit`);
};

export const deleteVideo = (req, res) => res.send("Delete Video");

export const search = (req, res) => res.send("Search Videos");
