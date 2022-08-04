import React, { ChangeEvent, useState } from "react";
import { IMovie } from "../../interfaces/IMovie";
import { Form } from "./styles";

type Props = {};

const MovieForm = (props: Props) => {
  const [form, setForm] = useState<IMovie>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {};

  const handleSubmit = () => {};

  return (
    <Form onSubmit={handleSubmit}>
      <p>Adicione um filme:</p>
      <div>
        <label>Título:</label>
        <input type="text" placeholder="título" />

        <label>Nota:</label>
        <input type="text" placeholder="nota no IMDB" />

        <label>Descrição:</label>
        <input type="text" placeholder="descrição" />

        <label>Gênero:</label>
        <input type="text" placeholder="gênero" />

        <label>Elenco:</label>
        <input type="text" placeholder="elenco" />

        <label>Lançamento:</label>
        <input type="number" placeholder="data de lançamento" />

        <label>Diretor:</label>
        <input type="text" placeholder="nome do diretor" />

        <label>Pôster:</label>
        <input type="text" placeholder="pôster do filme" />
      </div>
    </Form>
  );
};

export default MovieForm;
