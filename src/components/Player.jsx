import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import "./footre.css";
const mapStateToProps = (state)=>({
  selectedMusic: state.songs.selectedSongs
})
function Player({ selectedSong, selectedMusic }) {
  const [audio, setAudio] = useState(new Audio(selectedMusic.preview))
  const [playing, setPlaying] = useState(false)

  const getDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const secondsRemaining = seconds - minutes * 60
    return `${minutes}:${secondsRemaining}`
  }

  useEffect(() => {
    playing ? audio.play() : audio.pause()
  }, [playing])

  useEffect(() => {
    setAudio(new Audio(selectedMusic.preview))
  }, [selectedMusic])
  return (
    <div className="footer-div">
      {selectedSong ? (
        <Navbar
          expand="lg"
          className="footer-main d-flex justify-content-between align-items-center"
          variant="light"
        >
          <div className="music-player">
            <div className="song-bar">
              <div className="song-infos">
                <div className="image-container">
                  <img
                    src="https://www.genius-lyrics.com/wp-content/uploads/2021/11/Dynasties-Dystopia-Lyrics-Denzel-Curry.jpg"
                    alt=""
                  />
                </div>
                <div className="song-description">
                  <p className="title">Something</p>
                  <p className="artist text-muted">
                    {selectedSong.artist.name}
                  </p>
                </div>
              </div>
              <div className="icons">
                <i className="bi bi-heart"></i>
                <i className="bi bi-pip"></i>
              </div>
            </div>
            <div className="progress-controller">
              <div className="control-buttons mt-5 pb-0">
                <i className="bi bi-shuffle"></i>
                <i className="bi bi-skip-start-fill"></i>
                <i className="play-pause bi bi-play-circle-fill"></i>
                <i className="bi bi-skip-end-fill"></i>
                <i className="bi bi-arrow-repeat"></i>
              </div>
              <div className="progress-container mb-5 pt-0">
                <span>0:39</span>
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
                <span>2:58</span>
              </div>
            </div>
            <div className="other-features">
              <i className="bi bi-list-ul"></i>
              <i className="bi bi-pc-display"></i>
              <div className="volume-bar">
                <i className="bi bi-volume-down-fill"></i>
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
              </div>
            </div>
          </div>
        </Navbar>
      ) : (
        <Navbar
          expand="lg"
          className="footer-main d-flex justify-content-between align-items-center"
          variant="light"
        >
          <div className="music-player">
            <div className="song-bar">
              <div className="song-infos">
                <div className="image-container">
                  <img
                    src="https://www.genius-lyrics.com/wp-content/uploads/2021/11/Dynasties-Dystopia-Lyrics-Denzel-Curry.jpg"
                    alt=""
                  />
                </div>
                <div className="song-description">
                  <p className="title">Something</p>
                  <p className="artist text-muted">SomeOne</p>
                </div>
              </div>
              <div className="icons">
                <i className="bi bi-heart"></i>
                <i className="bi bi-pip"></i>
              </div>
            </div>
            <div className="progress-controller">
              <div className="control-buttons mt-5 pb-0">
                <i className="bi bi-shuffle"></i>
                <i className="bi bi-skip-start-fill"></i>
                {
                    playing
                      ? <i className="play-pause bi bi-pause-circle-fill" onClick={() => setPlaying(!playing)} />
                      : <i className="play-pause bi bi-play-circle-fill" onClick={() => setPlaying(!playing)} />
                  }                <i className="bi bi-skip-end-fill"></i>
                <i className="bi bi-arrow-repeat"></i>
              </div>
              <div className="progress-container mb-5 pt-0">
                <span>0:39</span>
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
                <span>2:58</span>
              </div>
            </div>
            <div className="other-features">
              <i className="bi bi-list-ul"></i>
              <i className="bi bi-pc-display"></i>
              <div className="volume-bar">
                <i className="bi bi-volume-down-fill"></i>
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
              </div>
            </div>
          </div>
        </Navbar>
      )}
    </div>
  );
}

export default connect(mapStateToProps)(Player);