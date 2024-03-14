const Post = require("../models/Posts");

exports.getAboutPage = (req, res) => {
  res.render("about");
};

exports.getAddPage = (req, res) => {
  res.render("add_post");
};

exports.getPostPage = (req, res) => {
  res.render("post");
};

exports.getEditPage = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  res.render("edit", {
    post,
  });
};


exports.getPostsPage = async (req, res) => {
  await Post.create(req.body)
  console.log(req.body)
  res.redirect('/')
}