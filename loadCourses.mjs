import fs from "fs";

let courses = [];

try {
  const data = await fs.promises.readFile("courses.json", "utf8");
  courses = JSON.parse(data).courses;
} catch (err) {
  console.error("Failed to read file", err);
}

export default courses;
