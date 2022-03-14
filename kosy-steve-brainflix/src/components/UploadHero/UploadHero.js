import React from 'react'
import './UploadHero.scss'
function UploadHero() {
  return (
  <section className="hero-container">
    <h4 className="hero__heading">VIDEO THUMBNAIL</h4>
    <img className="hero_container__img" src={'http://localhost:8080/images/Upload-video-preview.jpg'}></img>
  </section>
  )
}

export default UploadHero