import React, { ChangeEvent, FormEvent, useState } from "react";
import { IMovie } from "../../interfaces/IMovie";
import { Form } from "./styles";
import { useMovie } from "../../hooks/useMovie";

type Props = {};

const MovieForm = (props: Props) => {
  const { addMovie } = useMovie();

  const [form, setForm] = useState<IMovie>({
    id: "",
    title: "",
    rating: 0,
    description: "",
    genre: [],
    casting: [],
    release: 0,
    director: "",
    poster: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addMovie(form);
    console.log(form);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <p>Adicione um filme:</p>
      <div>
        <label>Título:</label>
        <input
          type="text"
          placeholder="título"
          name="title"
          value={form.title}
          onChange={handleChange}
        />

        <label>Nota:</label>
        <input
          type="text"
          placeholder="nota no IMDB"
          name="rating"
          value={form.rating}
          onChange={handleChange}
        />

        <label>Descrição:</label>
        <input
          type="text"
          placeholder="descrição"
          name="description"
          value={form.description}
          onChange={handleChange}
        />
        
        <label>Gênero:</label>
        <input
          type="text"
          placeholder="gênero"
          name="genre"
          value={form.genre}
          onChange={handleChange}
        />

        <label>Elenco:</label>
        <input
          type="text"
          placeholder="elenco"
          name="casting"
          value={form.casting}
          onChange={handleChange}
        />

        <label>Lançamento:</label>
        <input
          type="number"
          placeholder="data de lançamento"
          name="release"
          value={form.release}
          onChange={handleChange}
        />

        <label>Diretor:</label>
        <input
          type="text"
          placeholder="nome do diretor"
          name="director"
          value={form.director}
          onChange={handleChange}
        />

        <label>Pôster:</label>
        <input
          type="text"
          placeholder="pôster do filme"
          name="poster"
          value={form.poster}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Cadastrar</button>
    </Form>
  );
};

export default MovieForm;
