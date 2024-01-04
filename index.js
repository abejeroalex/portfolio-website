import "dotenv/config";
import express from "express";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.render("index.ejs");
});

app.listen(process.env.PORT, ()=>{
    console.log(`This app is running on port ${process.env.PORT}.`);
});