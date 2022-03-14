require('dotenv').config();
const express = require("express"); //require express package
const app = express(); //instantiates express for server
const PORT = process.env.PORT || 8080;
const cors = require("cors");

//Middleware for serving images, api documentation, access to body of POST requests, cross origin resource sharing
app.use(express.static("./public"));
app.use(express.json());
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

//Listen
app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
