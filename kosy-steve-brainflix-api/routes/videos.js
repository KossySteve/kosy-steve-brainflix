const express = require('express');
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');


const getVideos = () => {
    const videos = fs.readFileSync('./data/videos.json')
    return JSON.parse(videos)
}

const saveVideos = (video) => {
    fs.writeFileSync('./data/videos.json', JSON.stringify(video))
}
//To get all videos
router.route('/')
    .get((_req, res) => {
        let formattedVideos = getVideos()
            .map(video => {
                return  {
                    "id": video.id,
                    "title": video.title,
                    "channel": video.channel,
                    "image": video.image,
                  }
                
            })
        
        res.status(200).json(formattedVideos)
    })

    .post((req, res) => {
        // console.log(req.body.name, uuidv4())
        const newVideo = 
        {
            id: uuidv4(),
            title: req.body.title,
            channel: "Glen Harper",
            image: "https://i.imgur.com/MMDMgD7.jpg",
            description: req.body.description,
            views: "738,945",
            likes: 0,
            duration: "1:34",
            video: "https://project-2-api.herokuapp.com/stream",
            timestamp: Date.now(),
            comments: []
          }

        let allVideos = getVideos();
        allVideos.push(newVideo)

        saveVideos(videos)

        res.status(201).send({
            "id": newVideo.id,
            "status": "successful"
        })
    })
//To get selected video
router.get('/:videoId', (req, res) => {
    const selectedVideo = getVideos().find(video => video.id === req.params.videoId);

    if (!selectedVideo) {
        res.status(404).json({
            message: "Video not found"
        })
        return;
    }
    
    res.status(200).json(selectedVideo)
})
//To add comments
router.post('/:id/comments', (req, res) => {
    //pull our id from the request and rename to id
    const { id } = req.params

    //get all the videos
    let videos = getVideos();
    //find the video to update
    videoToUpdate = videos.find(video => video.id === id);

    //if video does not exist, send an error
    if (!videoToUpdate) {
        res.status(404).send({
            message: `Video with ID of "${id}" does not exist.`
        })
        return;
    } 
    

    //update comment
    videoToUpdate.comments.push({...req.body, "likes": 0, "timestamp": Date.now() })

    //find index of the video
    let videoIndex = videos.findIndex(video => video.id === videoToUpdate.id)
    //using the index, cut the original video from the array and replace with the updated one
    videos.splice(videoIndex, 1, videoToUpdate)

    //write the file with the updated video changes
    saveVideos(videos)

    //send the response
    res.status(201).json(videoToUpdate)
})
//To delete comments
router.delete('/:id/comments/:commentId', (req, res) => {

        const { id , commentId} = req.params
    
        //get all the videos
        let videos = getVideos();
        //find the video to update
        videoToUpdate = videos.find(video => video.id === id);
    
        //if video does not exist, send an error
        if (!videoToUpdate) {
            res.status(404).send({
                message: `Video with ID of "${id}" does not exist.`
            })
            return;
        }
    
        //update comment
        videoToUpdate.comments = videoToUpdate.comments.filter( comment => comment.timestamp != commentId)
    
        //find index of the video
        let videoIndex = videos.findIndex(video => video.id === videoToUpdate.id)
        //using the index, cut the original video from the array and replace with the updated one
        videos.splice(videoIndex, 1, videoToUpdate)
    
        //write the file with the updated video changes
        saveVideos(videos)
    
        //send the response
        res.status(201).json(videoToUpdate)
    })
module.exports = router;