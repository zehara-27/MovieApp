import React, { Component } from "react";
import "./Home.css";
import PropTypes from "prop-types";
import  {fetchMovieById}  from "../utils/api"
import MovieList from "./MoveList";



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieId: ""
    };
  }
  componentDidMount() {
    fetchMovieById()
      .then((res) => 
        this.setState({
          movieId: res.imdbID
        })
      )
      .catch(err => console.error("An error occured: " + err))
  }
  render() {
    return (
      <div className="wrapper">
        <h1 className="text-center text-uppercase py-3">
          {this.props.greeting}
        </h1>
        <div>
          {/* MOVIE LIST */}
          <MovieList/>
        </div>
      </div>
    );
  }
}
// PROP & DEFAULT TYPES
Home.propTypes = {
  greeting: PropTypes.string,
};
Home.defaultProps = {
  greeting: "Welcome to Shmoovie",
};

export default Home;
