import React from "react";
import AlbumCard from "./AlbumCard";
import { Row, Col, Spinner, Alert } from "react-bootstrap";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getArtistAction } from "../redux/actions";

const mapStateToProps = (state) => ({
  artistFromReduxStore: state.artistPage.setArtist,
  artistFetchFailed: state.artistPage.isError,
  areArtistStillFetching: state.artistPage.isLoading,
  songsFromReduxStore: state.artistPage.songs,
});

const mapDispatchToProps = (dispatch) => ({
  getArtist: (artistId) => {
    // I need to dispatch getBooksAction for initializing the fetch
    console.log("in mapDispatchToProps");
    dispatch(getArtistAction(artistId));
  },
});

const Artist = ({
  areArtistStillFetching,
  artistFetchFailed,
  artistFromReduxStore,
  getArtist,
  songsFromReduxStore,
}) => {
  // const [artist, setArtist] = useState({});
  // const [songs, setSongs] = useState([]);
  const params = useParams();
  console.log(artistFromReduxStore);
  console.log(songsFromReduxStore);

  // let headers = new Headers({
  //   "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  //   "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
  // });

  // const fetchArtist = async () => {
  //   try {
  //     let response = await fetch(
  //       "https://striveschool-api.herokuapp.com/api/deezer/artist/" + artistId,
  //       {
  //         method: "GET",
  //         headers,
  //       }
  //     );

  //     if (response.ok) {
  //       let artist = await response.json();
  //       setArtist(
  //         {
  //           artist,
  //         },
  //         async () => {
  //           let tracksResponse = await fetch(
  //             "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
  //               artist.name,
  //             {
  //               method: "GET",
  //               headers,
  //             }
  //           );

  //           if (tracksResponse.ok) {
  //             let tracklist = await tracksResponse.json();
  //             setSongs({ songs: tracklist.data });
  //           }
  //         }
  //       );
  //     }
  //   } catch (exception) {
  //     console.log(exception);
  //   }
  // };

  useEffect(() => {
    getArtist(params.id);
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

      <Row>
        <div className="col-12 col-md-10 col-lg-10 mt-5">
          <h2 className="titleMain">{artistFromReduxStore?.name}</h2>
          <div id="followers">{artistFromReduxStore?.nb_fan} followers</div>
          <div className="d-flex justify-content-center" id="button-container">
            <button className="btn btn-success mr-2 mainButton" id="playButton">
              PLAY
            </button>
            <button
              className="btn btn-outline-light mainButton"
              id="followButton"
            >
              FOLLOW
            </button>
          </div>
        </div>
      </Row>
      <Row className="mb-3">
        <Col xs={10}>
          <div className="mt-4 d-flex justify-content-start">
            <h2 className="text-white font-weight-bold">Tracks</h2>
          </div>
          <div className="pt-5 mb-5">
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
              {areArtistStillFetching ? (
                <div className="d-flex justify-content-center mt-4">
                  <Spinner variant="primary" animation="border" />
                </div>
              ) : artistFetchFailed ? (
                <Alert variant="danger">Fetch error, try again</Alert>
              ) : (
                songsFromReduxStore?.map((song) => (
                  <AlbumCard song={song} key={song.id} />
                ))
              )}
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Artist);
