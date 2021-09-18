import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";
import {fetchMovieById}  from "../utils/api";


class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  componentDidMount() {
    fetchMovieById (this.props.movieId)
      .then( res => this.setState({
          movie: {
            title: res.Title,
            poster: res.Poster,
            runTime: res.Runtime,
            genre: res.Genre,
            plot: res.Plot,
            actors: res.Actors,
            rated: res.Rated,
          },
        }))
      .catch( err => console.error("An error occured: " + err))
  }
  openModal() {
    this.setState({
      isOpen: true
    })
  }

  render() {
    let movie = this.state.movie;
    let isOpen = this.state.isOpen;
    return (
      <div className="row justify-content-center my-5 p-0">
        <div
          className="col-md-3 bg-light m-0 p-0"
          style={{ border: "2px solid #29508F" }} >

          <img className="img-fluid"  src={movie.poster} alt={`Movie poster for ${movie.title}`}/>

          <div className="text-center px-4 py-2"> <p className="h4 text-center" style={{ color: "#29508F" }}> {movie.title} </p>

          <button
              //   ONCLICK
              onClick={this.openModal} className="text-light rounded px-4 py-1" style={{ backgroundColor: "#29508F", border: "unset" }}>Details</button>
         
              </div>
        </div>
        
        <Modal isOpen={isOpen} closeModal={() => this.setState({isOpen: false})}>
          <div className="row">
            <div className="col-md-4 d-flex flex-wrap justify-content-between h4">
               <p className="h4">{movie.title}</p>
               <p className="text-monospace badge text-light" style={{ backgroundColor: "#4276C9" }}> {movie.rated}</p>
               <p className="text-monospace badge text-light" style={{ backgroundColor: "#4276C9" }}>{movie.runTime}</p>
               <p className="text-monospace badge text-light"  style={{ backgroundColor: "#4276C9" }} >{movie.genre}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p className="modal_heading">Plot</p>
              <p>{movie.plot}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p className="modal_heading">Actors</p>
              <p>{movie.actors}</p>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

MovieCard.propTypes = {
    title: PropTypes.string,
    poster: PropTypes.string,
    runTime: PropTypes.string,
    genre: PropTypes.string,
    plot: PropTypes.string,
    actors: PropTypes.string,
    rated: PropTypes.string,
};

export default MovieCard;