let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    createdAt: "3 minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createdAt: "5 minutes ago",
    views: 59,
    id: 3,
  },
];

export const marstube = (req, res) => {
  return res.render("marstube/home", { pageTitle: "MarsTube", videos });
};

export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("marstube/watch", {
    pageTitle: `Watching ${video.title}`,
    video,
  });
};

export const edit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("marstube/edit", {
    pageTitle: `Editing ${video.title}`,
    video,
  });
};

export const upload = (req, res) =>
  res.render("marstube/upload", { pageTitle: "Upload" });

export const deleteVideo = (req, res) => res.send("Delete Video");

export const search = (req, res) => res.send("Search Videos");
