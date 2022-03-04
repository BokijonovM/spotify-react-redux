import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import { Row } from "react-bootstrap";
import Artist from "./components/Artist";
import Album from "./components/Album";

let headers = new Headers({
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
});

class App extends React.Component {
  state = {
    searchResults: [],
  };

  search = async (string) => {
    if (string.length > 2) {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            string,
          {
            method: "GET",
            headers,
          }
        );

        let result = await response.json();
        let songs = result.data;

        this.setState({
          searchResults: songs,
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Row>
            <Sidebar search={this.search} />
            <Route
              path="/"
              exact
              render={() => <Home searchResults={this.state.searchResults} />}
            />
            <Route path="/artist/:id" component={Artist} />
            <Route path="/album/:id" component={Album} />
          </Row>
        </div>
        <Player />
      </Router>
    );
  }
}

export default App;
