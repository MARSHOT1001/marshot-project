import Video from "../models/Video";
import User from "../models/User";

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
  const {
    user: { _id },
  } = req.session;
  const { path: fileUrl } = req.file;
  const { title, description, hashtags } = req.body;
  try {
    const newVideo = await Video.create({
      title,
      description,
      fileUrl,
      owner: _id,
      hashtags: Video.formatHashtags(hashtags),
    });
    const user = await User.findById(_id);
    user.videos.push(newVideo._id);
    user.save();
    return res.redirect("/marstube");
  } catch (error) {
    return res.status(400).render("marstube/upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};

export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id).populate("owner");
  if (!video) {
    return res.render("marstube/404", { pageTitle: "Video not found" });
  }
  return res.render("marstube/watch", {
    pageTitle: video.title,
    video,
  });
};

export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.status(404).render("marstube/404", {
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
    return res
      .status(404)
      .render("marstube/404", { pageTitle: "Video not found." });
  }
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: hashtags.split(","),
  });
  await video.save();
  return res.redirect(`/marstube/${id}`);
};

export const deleteVideo = async (req, res) => {
  const { id } = req.params;
  await Video.findByIdAndDelete(id);
  return res.redirect("/marstube");
};

export const search = async (req, res) => {
  const { keyword } = req.query;
  let videos = [];
  if (keyword) {
    videos = await Video.find({
      title: { $regex: new RegExp(`${keyword}$`, "i") },
    });
  }
  return res.render("marstube/search", { pageTitle: "Search", videos });
};
