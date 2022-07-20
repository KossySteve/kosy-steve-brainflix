import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UploadForm from "../../components/UploadForm/UploadForm";
import "./VideoUpload.scss";
import { apiUrl } from "../../App";
import swal from "sweetalert";

const VideoUpload = () => {
  let history = useHistory();
  const [image, setImage] = useState({
    image: "http://localhost:8080/images/Upload-video-preview.jpg",
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setImage({ [e.target.name]: e.target.value });
  };

  const formNotValid = () => Object.values(image).includes("");

  const handleSubmit = (e) => {
    e.preventDefault();
    formNotValid()
      ? alert("Failed to upload, complete form")
      : axios.post(apiUrl(""), image).then((response) => {
          setImage({ title: "", description: "" });

          swal.fire("Upload was successful");
          history.push("/");
        });
  };

  return (
    <main className="main-section">
      <h1 className="main-section__title">Upload Video</h1>
      <section>
        <UploadForm
          handleSubmit={handleSubmit}
          id1={"title"}
          id2={"description"}
          onChange={handleChange}
          value1={image.title}
          value2={image.description}
          //for cancel button
          onClick={() => setImage({ title: "", description: "" })}
        />
      </section>
    </main>
  );
};

export default VideoUpload;
