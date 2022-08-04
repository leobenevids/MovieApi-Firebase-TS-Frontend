import React from "react";
import { Container } from "./styles";

type Props = {
  id: string;
  title: string;
  rating: number;
  description: string;
  genre: string[];
  casting: string[];
  release: number;
  director: string;
  poster: string;
};

const Movie = ({
  id,
  title,
  rating,
  description,
  genre,
  casting,
  release,
  director,
  poster,
}: Props) => {
  return (
    <Container>
      <h1>{title}</h1>
      <p>nota: {rating}</p>
      <p>sinopse: {description}</p>
      <p>gênero: {genre}</p>
      <p>elenco: {casting}</p>
      <p>ano de lançamento: {release}</p>
      <p>direção: {director}</p>
      <img src={poster} alt="poster" />
    </Container>
  );
};

export default Movie;
