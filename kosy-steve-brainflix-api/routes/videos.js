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
            timestamp: new Date(),
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

// router.put('/:teamId/likes/increment', (req, res) => {
//     //pull our teamId from the request and rename to id
//     const { teamId: id } = req.params

//     //get all the videos
//     let videos = getVideos();
//     //find the team to update
//     teamToUpdate = videos.find(team => team.id === id);

//     //if team does not exist, send an error
//     if (!teamToUpdate) {
//         res.status(404).send({
//             message: `Team with ID of "${id}" does not exist.`
//         })
//         return;
//     }

//     //update likes
//     teamToUpdate.likes += 1

//     //find index of the team
//     let teamIndex = videos.findIndex(team => team.id === teamToUpdate.id)
//     //using the index, cut the original team from the array and replace with the updated one
//     videos.splice(teamIndex, 1, teamToUpdate)

//     //write the file with the updated team changes
//     saveVideos(videos)

//     //send the response
//     res.status(201).json(teamToUpdate)
// })

module.exports = router;