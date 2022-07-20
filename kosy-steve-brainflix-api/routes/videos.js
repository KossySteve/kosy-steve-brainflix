const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const getVideos = () => {
  const videos = fs.readFileSync("./data/videos.json");
  return JSON.parse(videos);
};

const saveVideos = (video) => {
  fs.writeFileSync("./data/videos.json", JSON.stringify(video));
};
//To get all videos
router
  .route("/")
  .get((_req, res) => {
    let formattedVideos = getVideos().map((video) => {
      return {
        id: video.id,
        title: video.title,
        channel: video.channel,
        image: video.image,
      };
    });

    res.status(200).json(formattedVideos);
  })
  //upload video
  .post((req, res) => {
    // console.log(req.body.name, uuidv4())
    const newVideo = {
      title: req.body.title,
      channel: "Glen Harper",
      image: req.body.image,
      description: req.body.description,
      views: "1",
      likes: 0,
      duration: "1:34",
      video: "https://project-2-api.herokuapp.com/stream",
      timestamp: Date.now(),
      comments: [
        {
          name: "Kanye West",
          comment:
            "I’ve loved trains ever since I was a child. I dreamed about riding one around the world. This is the most fantastic thing I’ve seen yet, and I’m watching it ON a train!",
          likes: 3,
          timestamp: 1632512763100,
        },
        {
          name: "Diogo Jota",
          comment:
            "Let’s collaborate on a video for saving money on cheap train tickets! I’ll have my associates contact yours.",
          likes: 0,
          timestamp: 1632496261100,
        },
      ],
      id: uuidv4(),
    };

    let allVideos = getVideos();
    allVideos.push(newVideo);

    saveVideos(allVideos);

    res.status(201).send({
      id: newVideo.id,
      status: "successful",
    });
  });

//To get selected video
router.get("/:videoId", (req, res) => {
  const selectedVideo = getVideos().find(
    (video) => video.id === req.params.videoId
  );

  if (!selectedVideo) {
    res.status(404).json({
      message: "Video not found",
    });
    return;
  }

  res.status(200).json(selectedVideo);
});
//To add comments
router.post("/:id/comments", (req, res) => {
  //pull our id from the request and rename to id
  const { id } = req.params;

  //get all the videos
  let videos = getVideos();
  //find the video to update
  videoToUpdate = videos.find((video) => video.id === id);

  //if video does not exist, send an error
  if (!videoToUpdate) {
    res.status(404).send({
      message: `Video with ID of "${id}" does not exist.`,
    });
    return;
  }

  //update comment
  videoToUpdate.comments.push({ ...req.body, likes: 0, timestamp: Date.now() });

  //find index of the video
  let videoIndex = videos.findIndex((video) => video.id === videoToUpdate.id);
  //using the index, cut the original video from the array and replace with the updated one
  videos.splice(videoIndex, 1, videoToUpdate);

  //write the file with the updated video changes
  saveVideos(videos);

  //send the response
  res.status(201).json(videoToUpdate);
});
//To delete comments
router.delete("/:id/comments/:commentId", (req, res) => {
  const { id, commentId } = req.params;

  //get all the videos
  let videos = getVideos();
  //find the video to update
  videoToUpdate = videos.find((video) => video.id === id);

  //if video does not exist, send an error
  if (!videoToUpdate) {
    res.status(404).send({
      message: `Video with ID of "${id}" does not exist.`,
    });
    return;
  }

  //update comment
  videoToUpdate.comments = videoToUpdate.comments.filter(
    (comment) => comment.timestamp != commentId
  );

  //find index of the video
  let videoIndex = videos.findIndex((video) => video.id === videoToUpdate.id);
  //using the index, cut the original video from the array and replace with the updated one
  videos.splice(videoIndex, 1, videoToUpdate);

  //write the file with the updated video changes
  saveVideos(videos);

  //send the response
  res.status(201).json(videoToUpdate);
});
module.exports = router;
