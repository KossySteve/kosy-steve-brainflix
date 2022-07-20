require("dotenv").config();
const express = require("express"); //require express package
const fileUpload = require("express-fileupload"); //require express package
const app = express(); //instantiates express for server
const PORT = process.env.PORT || 8080;
const cors = require("cors");

//Middleware for serving images, api documentation, access to body of POST requests, cross origin resource sharing
app.use(express.static("./public"));
app.use(express.json());
app.use(fileUpload());
app.use(cors());

//Middleware for request api key authentication
app.use((req, res, next) => {
  //localhost:8080/videos?api_key=65464bbf-2db6-4b96-86d5-1bf19bb9249b
  const { api_key } = req.query;

  // console.log("incoming request")
  api_key === process.env.API_KEY
    ? next()
    : res.status(401).send({
        message:
          "Unauthorized. Please refer to documentation and  add a api key",
      });
});

//Routes
const videosRoutes = require("./routes/videos.js");
app.use("/videos", videosRoutes);

//fileroutes
app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}`})
  });
});

//Listen
app.listen(PORT, () => {
  console.log("server is running on port here " + PORT);
});
