import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  div {
    width: 50%;
    height: 4rem;

    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
`;
