import express from "express";
import path from "path";

const __dirname = path.resolve();
const port = 3000;

const app = express();

app.use("/", express.static(path.join(__dirname, "public")));

app.use(function (req, res, next) {
  res.status(404);
  res.sendFile(path.join(__dirname + "/public/404.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
