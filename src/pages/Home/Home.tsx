import React from "react";
import MovieForm from "../../components/MovieForm/MovieForm";
import MovieList from "../../components/MovieList/MovieList";
import Navbar from "../../components/Navbar/Navbar";
import { Container } from "./styles";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Navbar />
      <Container>
        <MovieForm />
        {/* <MovieList /> */}
      </Container>
    </>
  );
};

export default Home;
