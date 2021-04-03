import { Header1 } from "./styles.js";
import React, { useState } from "react";
import c from "../../assets/redjedi.png";

function Header() {
  return (
    <div className="container">
      <Header1>
        <ul>
          <li>
            {" "}
            <a href={`/`} className="home">
              Home
            </a>
          </li>
          <li>
            <a className="linkPlantes" href={`/planetas`}>
              Planetas
            </a>
          </li>
          <li>
            {" "}
            <a href={`/personagens`}>Personagens</a>
          </li>
          <li></li>
        </ul>
        <a className="fallen" href="/">
          <img src={c} className="wars" alt="" />
        </a>
      </Header1>
    </div>
  );
}

export default Header;
