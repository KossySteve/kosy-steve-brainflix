import React from 'react'
import bikeImg from "../../assets/images/Upload-video-preview.jpg";
import './UploadHero.scss'
function UploadHero() {
  return (
  <section className="hero-container">
    <h4 className="hero__heading">VIDEO THUMBNAIL</h4>
    <img className="hero_container__img" src={bikeImg}></img>
  </section>
  )
}

export default UploadHero