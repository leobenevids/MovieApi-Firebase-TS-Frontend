import { IMovie } from "./../interfaces/IMovie";
import Api from "./Api";

const getAllMovies = () => Api.get<IMovie[]>("/movies");
const getOneMovie = () => Api.get<IMovie[]>("/movies/:id");
const addMovie = (
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
) => Api.post("/movies", movie);

export const MoviesService = {
  getAllMovies,
  getOneMovie,
  addMovie,
};
