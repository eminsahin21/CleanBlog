const express = require("express");
const ejs = require("ejs")
const mongoose = require('mongoose')
const methodOverride = require("method-override");
const Post = require('./models/Posts')
const postController = require('./controllers/postController')
const pageController = require('./controllers/pageController')
const app = express();

mongoose.connect('mongodb://localhost/cleanblog-test-db')

//MIDDLEWARE
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride("_method",{
  methods:[
    'POST','GET'
  ]
}));

//TEMPLATE ENGINE
app.set("view engine","ejs")

//ROUTES
app.get("/", postController.getAllPosts)

//ilgili post sayfsasi acilimi
app.get("/posts/:id", postController.getOnePost);

//post silme
app.delete("/posts/:id", postController.deletePost);
//POST GUNCELLEME
app.put("/posts/:id", postController.updatePost)

//post atma islemi
app.post("/posts", pageController.getPostsPage);

app.get("/about", pageController.getAboutPage);
app.get("/add_post", pageController.getAddPage);
app.get("/post", pageController.getPostPage);
app.get("/posts/edit/:id", pageController.getEditPage);


const port = 3000;
app.listen(3000, () => {
  console.log(`Uygulama ${port} portunda baslatiliyor...`);
});
