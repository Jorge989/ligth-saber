import "./App.css";
import React, { useState } from "react";
import blue from "./assets/blue.png";
import red from "./assets/red2.png";
import green from "./assets/green4.png";
import yellow from "./assets/yy.png";
import purple from "./assets/purple4.png";

import c from "./assets/redjedi.png";

import lumi1 from "./assets/lum2.png";
function App() {
  const [srcImage, setSrcImage] = useState(green);

  console.log("oioioiio");

  return (
    <div className="container">
      <header>
        {/* <ul>
          <li>
            <a>Planetas</a>
          </li>
          <li>
            {" "}
            <a>Personagens</a>
          </li>
          <li></li>
        </ul> */}
        <a className="fallen" href="home">
          <img src={c} className="wars" alt="" />
        </a>
      </header>
      {/* <div className="star-wars">
        <h1 className="ola1">STAR</h1>
        <h1 className="ola2">WARS</h1>
      </div> */}
      <div className="lumi">
        <img src={lumi1} className="lumi1" alt="" />
      </div>
      <div className="card-container">
        {srcImage === green ? (
          <h1 className="greenText">Green</h1>
        ) : srcImage === red ? (
          <h1 className="RedText">Red</h1>
        ) : srcImage === blue ? (
          <h1 className="BlueText">Blue</h1>
        ) : srcImage === purple ? (
          <h1 className="PurpleText">Purple</h1>
        ) : srcImage === blue ? (
          <h1 className="BlueText">Blue</h1>
        ) : srcImage === yellow ? (
          <h1 className="YellowText">Yellow</h1>
        ) : (
          console.log("oi")()
        )}

        <img src={srcImage} className="principal-sabre" alt="" />
      </div>
      <div className="divsabres">
        <div className="blue">
          <button
            className="blue-btn"
            id="btn3"
            onClick={() => setSrcImage(blue)}
          ></button>
        </div>
        <div className="purple">
          <button
            className="purple-btn"
            id="btn3"
            onClick={() => setSrcImage(purple)}
          ></button>
        </div>

        <div className="green">
          <button
            className="green-btn"
            id="btn2"
            onClick={() => setSrcImage(green)}
          ></button>
        </div>
        <div className="red">
          <button
            className="btn-red"
            id="btn1"
            onClick={() => setSrcImage(red)}
          ></button>
        </div>
        <div className="yellow">
          <button
            className="yellow-btn"
            id="btn2"
            onClick={() => setSrcImage(yellow)}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default App;
