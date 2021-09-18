import React, { Component } from "react";
import {fetchMoviesByTerm}  from "../utils/api";
import MovieCard from "./Movecard";

import SearchForm from "./SearchForm";

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      searchTerm: "batman",
      movies: [],
      totalResults: "",
    };
  }

  componentDidMount() {
    fetchMoviesByTerm(this.state.searchTerm)
      .then((res) =>
        this.setState({
          movies: res.Search,
          totalResults: res.totalResults,
        })
      )
      .catch((err) => console.error(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchTerm !== prevState.searchTerm)
      fetchMoviesByTerm(this.state.searchTerm).then((res) =>
        this.setState({
          movies: res.Search,
          totalResults: res.totalResults,
        })
      );
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-3 offset-md-1">
            <SearchForm
              onSubmit={(e) => {
                e.preventDefault();
                this.setState({ searchTerm: e.target[0].value, isLoading: true });
              }}
            />
          </div>
          <div className="col-md-6 offset-md-1">
            <h2>List of Movies</h2>
          </div>
        </div>
        {this.state.movies.map((movie) => (
          <div key={movie.imdbID}>
            <MovieCard movieId={movie.imdbID} />
          </div>
        ))}
      </div>
    );
  }
}
export default MovieList;
