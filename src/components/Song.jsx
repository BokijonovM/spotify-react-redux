import React from "react";
import { connect } from "react-redux";
import { selectSongAction } from "../redux/actions";

const mapStateToProps =(state) => ({
  selectedSongs: state.songs.selectedSongs
})
const mapDispatchToProps = dispatch =>({
  selectedSongs: (song) => {dispatch(selectSongAction(song))}
})

const Song = ({ track, selectedSongs }) => (
  <div className="py-3 trackHover">
    <span className="card-title trackHover px-3" onClick={ ()=> selectedSongs(track) } style={{ color: "white" }}>
      {track.title}
    </span>
    <small className="duration" style={{ color: "white" }}>
      {Math.floor(parseInt(track.duration) / 60)}:
      {parseInt(track.duration) % 60 < 10
        ? "0" + (parseInt(track.duration) % 60)
        : parseInt(track.duration) % 60}
    </small>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Song);
