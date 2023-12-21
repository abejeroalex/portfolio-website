import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/portfolio", (req, res)=>{
    res.render("index.ejs");
});

app.listen(port, ()=>{
    console.log(`This app is listening to port ${port}.`);
});