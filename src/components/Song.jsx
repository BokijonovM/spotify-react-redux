import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { connect } from "react-redux";
import {
  addToAlbumCartActionWithThunk,
  removeFromCartAction,
} from "../redux/actions";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (musicToAdd) => {
    dispatch(addToAlbumCartActionWithThunk(musicToAdd));
  },
  removeFromCart: (index) => {
    dispatch(removeFromCartAction(index));
  },
});

function Song({ tracks, addToCart }) {
  const [selectedSong, setSelectedSong] = useState(null);
  const navigate = useNavigate();
  return (
    <div>
      {tracks.map((track, i) => {
        return (
          <div
            className="py-1 pl-2 pr-3 w-100 trackHover d-flex align-items-center"
            key={track.id}
            onClick={setSelectedSong(track)}
          >
            <p className="text-light mb-0">{i + 1}</p>
            <div className="px-3">
              <h6
                className="card-title trackHover mb-0"
                style={{ color: "white" }}
              >
                {track.title}
              </h6>
              <p
                onClick={() => navigate(`/artist/${track.artist.id}`)}
                className="mb-0 text-muted"
                style={{ color: "white", fontSize: "14px" }}
              >
                {track.artist.name}
              </p>
            </div>
            <small className="duration ml-auto" style={{ color: "white" }}>
              {Math.floor(parseInt(track.duration) / 60)}:
              {parseInt(track.duration) % 60 < 10
                ? "0" + (parseInt(track.duration) % 60)
                : parseInt(track.duration) % 60}
            </small>
            <span
              onClick={() => {
                addToCart(track);
              }}
            >
              <AiFillHeart id="love-icon-id" className="love-icon ml-2" />
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Song);
