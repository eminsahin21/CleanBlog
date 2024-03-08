const express = require("express");

const app = express();

app.get("/", (req,res) => {
    res.send("Merhaba")
})

app.get("/about", (req, res) => {
  const blog = { id: 1, title: "Blog title", description: "Blog description" };
  res.send(blog);
});



const port = 3000;
app.listen(3000, () => {
  console.log(`Uygulama ${port} portunda baslatiliyor...`);
});