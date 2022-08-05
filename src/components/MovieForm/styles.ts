import styled from "styled-components";

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;

  div {
    label {
      font-size: 12px;
    }

    input {
      width: 90%;
    }
  }

  button {
    width: 100px;
  }
`;
