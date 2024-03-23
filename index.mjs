import express from "express";
import coursesData from "./loadCourses.mjs";
const app = express();

app.use(express.static("public"));
app.set("view engine", "pug");

let courses = await coursesData;

app.get("/courses/", (req, res) => {
  res.render("index", { courses: courses, nb: 3 });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
