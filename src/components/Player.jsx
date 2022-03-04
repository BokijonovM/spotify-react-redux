import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";
const mapStateToProps = (state) => ({
  selectedSongs: state.songs.selectedSongs
})

function Player({ selectedSongs }) {
  const [audio, setAudio] = useState(new Audio(selectedSongs.preview))
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
    setAudio(new Audio(selectedSongs.preview))
  }, [selectedSongs])
  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <Row>
        <div className="col-lg-10 offset-lg-2">
          <Row>
            <div className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
              <Row>
                <a href="/">
                  <img src="/playerbuttons/Shuffle.png" alt="shuffle" />
                </a>
                <a href="/">
                  <img src="/playerbuttons/Previous.png" alt="shuffle" />
                </a>
                
                <small>
                  {
                    playing
                      ? <img className="playicon" src="/playerbuttons/Pause.png" alt="play" onClick={() => setPlaying(!playing)} />
                      : <img className="playicon"  src="/playerbuttons/Play.png" alt="play" onClick={() => setPlaying(!playing)} />
                  }
                </small>

                <a href="/">
                  <img src="/playerbuttons/Next.png" alt="shuffle" />
                </a>
                <a href="/">
                  <img src="/playerbuttons/Repeat.png" alt="shuffle" />
                </a>
              </Row>
            </div>
          </Row>
          <Row className="justify-content-center playBar py-3">
            <div className="col-8 col-md-6">
              <div id="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </Row>
        </div>
      </Row>
    </div>
  )
}


export default connect(mapStateToProps)(Player);

