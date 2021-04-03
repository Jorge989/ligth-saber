import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Form } from "./styles.js";
import api from "../../services/api";
import Bluep from "../../assets/bluep.png";
import Redp from "../../assets/redplante.png";
import Lavap from "../../assets/lavaP.png";

import Mars from "../../assets/mars.png";
import Mars2 from "../../assets/mars2.png";
import Mars3 from "../../assets/mars3.png";
import Mars4 from "../../assets/mars4.png";
import Mars5 from "../../assets/mars5.png";
import Mars7 from "../../assets/mars7.png";

import Mars9 from "../../assets/mars10.png";
import Mars11 from "../../assets/mars11.png";
import Mars12 from "../../assets/mars12.png";
import Mars14 from "../../assets/mars14.png";

function Planetas() {
  const [population, setPopulation] = useState("");
  const [climate, setClimate] = useState("");
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [diameter, setDiameter] = useState("");
  const [gravity, setGravity] = useState("");

  const images = [
    Redp,
    Mars2,
    Mars5,
    Mars,
    Lavap,
    Mars4,
    Bluep,
    Mars3,
    Mars9,
    Mars7,
    Mars11,
    Mars12,
    Mars14,
  ];
  const [imgIndex, setImgIndex] = useState(0);
  useEffect(() => {
    api.get(`${page}`).then((response) => {
      // setPlanet(response.data);
      console.log(response.data);
      setName(response.data.name);
      setClimate(response.data.climate);
      setPopulation(response.data.population);
      setDiameter(response.data.diameter);
      setGravity(response.data.gravity);
      console.log("aquiii" + response.data);
    });
  }, [page]);
  function handlePlanets() {
    setPage(page + 1);
    setImgIndex(imgIndex + 1);
    const newIndex = imgIndex + 1;
    if (newIndex >= images.length) {
      setImgIndex(0);
      setPage(0);
      return;
    }
  }

  return (
    <div className="container">
      <Header />
      <Form>
        <div className="lista">
          <ul className="formplantes">
            <li className="titulo1">Planeta</li>
            <h2>{name}</h2>
            <li className="titulo">Gravidade</li>
            <li className="titulo2">{gravity}</li>

            <li className="titulo">Clima</li>
            <li className="titulo2">{climate}</li>

            <li className="titulo">Populaçao</li>
            <li className="titulo2">{population}</li>

            <li className="titulo">Diametro</li>
            <li className="titulo2">{diameter}</li>
          </ul>
        </div>
        <div className="btn">
          <img src={images[imgIndex]} alt="" />

          <button onClick={handlePlanets} className="darkbutton">
            PROXÍMO
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Planetas;
