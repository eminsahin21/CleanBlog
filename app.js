const express = require("express");
const ejs = require("ejs")

const app = express();

//MIDDLEWARE
app.use(express.static("public"))

//TEMPLATE ENGINE
app.set("view engine","ejs")

//ROUTES
app.get("/", (req,res) => {
    res.render("index")
})

app.get("/about", (req, res) => {
  res.render("about")
});

app.get("/add_post", (req, res) => {
  res.render("post")
});

app.get("/post", (req, res) => {
  res.render("post")
});



const port = 3000;
app.listen(3000, () => {
  console.log(`Uygulama ${port} portunda baslatiliyor...`);
});
