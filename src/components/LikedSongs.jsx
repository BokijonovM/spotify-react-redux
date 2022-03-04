import React from "react";
import { connect } from "react-redux";
import { removeFromCartAction } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { Button } from "react-bootstrap";

const mapStateToProps = (state) => ({
  albumCart: state.albumCart.albums,
  cartLength: state.albumCart.albums.length,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (index) => {
    dispatch(removeFromCartAction(index));
  },
});

function LikedSongs({ albumCart, removeFromCart, cartLength }) {
  const navigate = useNavigate();
  console.log("albumCart", albumCart);
  return (
    <div className="col-12 col-md-9 offset-md-3 my-5 pr-5">
      {albumCart.map((track, i) => {
        return (
          <div
            className="py-1 pl-2 pr-3 w-100 trackHover d-flex align-items-center"
            key={track.id}
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
                removeFromCart(i);
              }}
            >
              <AiFillHeart id="love-icon-id" className="love-icon ml-2" />
            </span>
          </div>
        );
      })}
      <Button className="number-of-liked-songs" variant="info">
        {cartLength}
      </Button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(LikedSongs);
