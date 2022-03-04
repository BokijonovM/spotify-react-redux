import React, { useEffect, useState } from "react";
import Song from "./Song";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Album = () => {
  const [album, setAlbum] = useState({});
  const [songs, setSongs] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let albumId = params.id;

    let headers = new Headers({
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
    });

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId,
        {
          method: "GET",
          headers,
        }
      );

      if (response.ok) {
        let album = await response.json();
        setSongs(album.tracks.data);
        setAlbum(album);
        console.log(album.tracks.data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      <Row>
        {album.cover && (
          <div className="col-md-3 pt-5 text-center" id="img-container">
            <img src={album.cover} className="card-img img-fluid" alt="Album" />
            <div className="mt-4 text-center">
              <p className="album-title">{album.title}</p>
            </div>
            <div className="text-center">
              <p className="artist-name">
                {album.artist ? album.artist.name : ""}
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
              {songs.map((song) => (
                <Song track={song} key={song.id} />
              ))}
            </div>
          </Row>
        </div>
      </Row>
    </div>
  );
};

export default Album;
