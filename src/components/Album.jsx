import React, { useEffect, useState } from "react";
import Song from "./Song";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { addToAlbumCartActionWithThunk } from "../redux/actions";
import { getAlbumsAction } from "../redux/actions";

const mapStateToProps = (state) => ({
  cartLength: state.albumCart.albums.length,
  albumsFromReduxStore: state.album.stock,
  albumInfo: state.album.album,
});

const mapDispatchToProps = (dispatch) => ({
  addToAlbumCart: (musicToAdd) => {
    dispatch(addToAlbumCartActionWithThunk(musicToAdd));
  },
  getAlbums: (query) => {
    console.log("in mapDispatchToProps");
    dispatch(getAlbumsAction(query));
  },
});

const Album = ({ albumInfo, getAlbums, albumsFromReduxStore }) => {
  const params = useParams();

  useEffect(() => {
    getAlbums(params.id);

    console.log("new", albumInfo);
  }, []);
  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <Row className="mb-3">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <div>TRENDING</div>
          <div>PODCAST</div>
          <div>MOODS AND GENRES</div>
          <div>NEW RELEASES</div>
          <div>DISCOVER</div>
        </div>
      </Row>
      <Row style={{ marginRight: "-200px" }}>
        {albumInfo.cover && (
          <div className="col-md-3 pt-5 text-center" id="img-container">
            <img
              src={albumInfo.cover}
              className="card-img img-fluid"
              alt="AlbumInfo"
            />
            <div className="mt-4 text-center">
              <p className="album-title">{albumInfo.title}</p>
            </div>
            <div className="text-center">
              <p className="artist-name">
                {albumInfo.artist ? albumInfo.artist.name : ""}
              </p>
            </div>
            <div className="mt-4 text-center">
              <button id="btnPlay" className="btn btn-success" type="button">
                Play
              </button>
            </div>
          </div>
        )}
        <div className="col-md-8 py-5 pl-5">
          <Row>
            <div className="col-md-10 mb-5" id="trackList">
              <Song tracks={albumsFromReduxStore} />
            </div>
          </Row>
        </div>
      </Row>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);
