import { useCallback, useState } from "react";
import { IMovie } from "../interfaces/IMovie";
import { MoviesService } from "../services/MoviesService";

export const useMovie = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [movie, setMovie] = useState<IMovie[]>();

  const getAllMovies = useCallback(async () => {
    const { status, data } = await MoviesService.getAllMovies();

    if (status !== 200) throw new Error();

    setMovies(data);
  }, []);

  const addMovie = useCallback(
    async (
      movie: Pick<
        IMovie,
        | "title"
        | "rating"
        | "description"
        | "genre"
        | "casting"
        | "release"
        | "director"
        | "poster"
      >
    ) => {
      const { status } = await MoviesService.addMovie(movie);

      if (status !== 201) throw new Error();
    },
    []
  );

  const getOneMovie = useCallback(async () => {
    const { status, data } = await MoviesService.getOneMovie();

    if (status !== 200) throw new Error();

    setMovie(data);
  }, []);

  return { movie, movies, getAllMovies, addMovie, getOneMovie };
};
