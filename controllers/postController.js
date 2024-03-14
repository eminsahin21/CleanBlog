const Post = require('../models/Posts')

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find({});
  res.render("index", {
    posts,
  });
};

exports.deletePost = async (req, res) => {
  await Post.findOneAndDelete(req.params.id)
  res.redirect('/')
}

exports.updatePost = async (req,res) => {
  const post = await Post.findOne({_id:req.params.id})
  post.title = req.body.title;
  post.message = req.body.message;
  post.save();

  res.redirect(`/posts/${req.params.id}`)
}


exports.getOnePost = async (req, res) => {
  const post = await Post.findById(req.params.id)
  res.render('post',{
    post
  })
}