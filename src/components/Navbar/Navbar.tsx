import React from "react";
import { Nav } from "./styles";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <Nav>
      <div>
        <h2>Films</h2>
      </div>
      <div>
        <ul>
          <a href="">
            <li>Actors</li>
          </a>
          <a href="">
            <li>Genres</li>
          </a>
          <a href="">
            <li>Rating</li>
          </a>
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;
