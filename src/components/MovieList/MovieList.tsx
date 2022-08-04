import React, { useEffect } from "react";
import { useMovie } from "../../hooks/useMovie";
import Movie from "../Movie/Movie";

type Props = {};

const MovieList = (props: Props) => {
  const { movies, getAllMovies } = useMovie();

  useEffect(() => {
    getAllMovies();
  }, [getAllMovies]);

  return (
    <div>
      <h1>Lista de Filmes</h1>
      <ul>
        {movies.map((movie) => (
          <Movie
            id={movie.id}
            title={movie.title}
            rating={movie.rating}
            description={movie.description}
            genre={movie.genre}
            casting={movie.casting}
            release={movie.release}
            director={movie.director}
            poster={movie.poster}
          />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
