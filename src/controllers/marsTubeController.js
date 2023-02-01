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
      hashtags: hashtags.split(" , ").map((word) => `#${word}`),
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
  if (!video) {
    return res.render("marstube/404", { pageTitle: "Video not found" });
  }
  return res.render("marstube/watch", {
    pageTitle: video.title,
    video: video,
  });
};

export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("marstube/404", {
      pageTitle: `Video not found.`,
    });
  }
  return res.render("marstube/edit", {
    pageTitle: `Edit: ${video.title}`,
    video,
  });
};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("marstube/404", { pageTitle: "Video not found." });
  }
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: hashtags.split(" , "),
  });
  await video.save();
  return res.redirect(`/marstube/${id}`);
};

export const deleteVideo = (req, res) => res.send("Delete Video");

export const search = (req, res) => res.send("Search Videos");
