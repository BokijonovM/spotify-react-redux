import React from "react";
import { Link, withRouter } from "react-router-dom";

class Sidebar extends React.Component {
  state = {
    searchInput: "",
  };

  render() {
    return (
      <div className="col-2">
        <nav
          className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
          id="sidebar"
        >
          <div className="nav-container">
            <Link to="/" className="navbar-brand">
              <img
                src="/logo/Spotify_Logo.png"
                alt="Spotify_Logo"
                width="131"
                height="40"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <ul>
                  <li>
                    <Link to="/" className="nav-item nav-link">
                      <i className="fas fa-home fa-lg"></i>&nbsp; Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="nav-item nav-link">
                      <i className="fas fa-book-open fa-lg"></i>&nbsp; Your
                      Library
                    </Link>
                  </li>
                  {this.props.location.pathname === "/" && (
                    <li>
                      <div className="input-group mt-3">
                        <input
                          type="text"
                          className="form-control mb-2"
                          id="searchField"
                          placeholder="Search"
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                          onChange={(event) =>
                            this.setState({
                              searchInput: event.currentTarget.value,
                            })
                          }
                        />
                        <div
                          className="input-group-append"
                          style={{ marginBottom: "4%" }}
                        >
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            type="button"
                            id="button-addon1"
                            onClick={() =>
                              this.props.search(this.state.searchInput)
                            }
                          >
                            GO
                          </button>
                        </div>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="nav-btn">
            <button className="btn" id="signup-btn" type="button">
              Sign Up
            </button>
            <button className="btn" id="login-btn" type="button">
              Login
            </button>
            <a href="/">Cookie Policy</a> |<a href="/"> Privacy</a>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Sidebar);
