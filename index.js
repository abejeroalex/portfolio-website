import "dotenv/config";
import express from "express";

const app = express();

console.log(process.env.PORT);

app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.render("index.ejs");
});

app.listen(process.env.PORT, ()=>{
    console.log(`This app is running on port ${process.env.PORT}.`);
});