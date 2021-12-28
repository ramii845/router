import React from "react";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";
import { moviesData } from "../data";

const MovieCard = ({ film }) => {
  return (
    <div className="movie-card"> 
      <StarRating rate={film.rating} />
      <img src={film.image} alt={film.name} />
      <h3> {film.name} </h3>
      <p> {film.date} </p>
      <Link to={`/movies/${film.id}`}>
        <button>view detatils</button>
      </Link>
    </div>
  );
};

export default MovieCard;