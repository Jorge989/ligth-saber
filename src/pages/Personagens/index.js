import { Form2 } from "./styles";
import Dark1 from "../../assets/personagens/dark2.png";
import C3p1 from "../../assets/personagens/c3po3.png";
import R21 from "../../assets/personagens/r21.png";
import Kylo1 from "../../assets/personagens/kylo1.png";
import Yoda1 from "../../assets/personagens/yoda5.png";
import samu1 from "../../assets/personagens/samu1.png";
import c from "../../assets/redjedi.png";
import chew1 from "../../assets/personagens/chew1.png";

import rey2 from "../../assets/personagens/rey3.png";
import ob1 from "../../assets/personagens/obi1.png";
import dart1 from "../../assets/personagens/dart1.png";
import palp2 from "../../assets/personagens/palp2.png";
import ani2 from "../../assets/personagens/ani2.png";
import Luke1 from "../../assets/personagens/luke1.png";
import Storm1 from "../../assets/personagens/storm2.png";
import reco1 from "../../assets/personagens/reco1.png";
import han2 from "../../assets/personagens/han2.png";
import leia1 from "../../assets/personagens/leia1.png";
import b8 from "../../assets/personagens/b83.png";

import ducan from "../../assets/personagens/ducan.png";
import padme from "../../assets/personagens/padme3.png";
import kiu from "../../assets/personagens/kiu.png";
import jar from "../../assets/personagens/jar2.png";
import foto1 from "../../assets/personagens/foto1.png";
import foto2 from "../../assets/personagens/foto2.png";
import Jaba from "../../assets/personagens/jaba.png";

function Personagens() {
  return (
    <>
      <div className="card-container2">
        <header className="head">
          <ul className="ul2">
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
        </header>
        <Form2>
          <div className="card-container3">
            <div className="card">
              <p>Darth Vader</p>
              <img src={Dark1} alt="" />
            </div>
            <div className="card">
              <p>C3po</p>
              <img src={C3p1} alt="" />
            </div>
            <div className="card">
              <p className="r2t">R2D2</p>
              <img src={R21} alt="" className="r2" />
            </div>
            <div className="card">
              <p>Kylo Ren</p>
              <img src={Kylo1} alt="" />
            </div>
            <div className="card">
              <p>Mace Windu</p>
              <img src={samu1} alt="" />
            </div>
          </div>
          <div className="card-container4">
            <div className="card">
              <p>Yoda</p>
              <img src={Yoda1} alt="" />
            </div>
            <div className="card">
              <p>Rey</p>
              <img src={rey2} alt="" />
            </div>
            <div className="card">
              <p>Chewbacca</p>
              <img src={chew1} alt="" />
            </div>
            <div className="card">
              <p>Obi-Wan Kenobi</p>
              <img src={ob1} alt="" />
            </div>
            <div className="card">
              <p>Darth Maul</p>
              <img src={dart1} alt="" />
            </div>
          </div>
          <div className="card-container5">
            <div className="card">
              <p>Anakin Skywalker</p>
              <img src={ani2} alt="" />
            </div>
            <div className="card">
              <p>Palpatine</p>
              <img src={palp2} alt="" />
            </div>
            <div className="card">
              <p>Luke Skywalker</p>
              <img src={Luke1} alt="" />
            </div>
            <div className="card">
              <p>Stormtrooper</p>
              <img src={Storm1} alt="" />
            </div>
            <div className="card">
              <p>Jango Fett</p>
              <img src={reco1} alt="" />
            </div>
          </div>
          <div className="card-container6">
            <div className="card">
              <p>Han Solo</p>
              <img src={han2} alt="" />
            </div>
            <div className="card">
              <p>Leia Organa</p>
              <img src={leia1} alt="" />
            </div>
            <div className="card">
              <p className="b8t">BB-8</p>
              <img src={b8} alt="" className="b8" />
            </div>
            <div className="card">
              <p>Conde Dookan</p>
              <img src={ducan} alt="" className="ducan" />
            </div>
            <div className="card">
              <p>Padmé Amidala</p>
              <img src={padme} alt="" />
            </div>
          </div>
          <div className="card-container6">
            <div className="card">
              <p>Qui-Gon Jinn</p>
              <img src={kiu} alt="" />
            </div>
            <div className="card">
              <p>Jar Jar Binks</p>
              <img src={jar} alt="" />
            </div>
            <div className="card">
              <p>Droid</p>
              <img src={foto1} alt="" className="foto2" />
            </div>
            <div className="card">
              <p>Povo da Areia</p>
              <img src={foto2} alt="" className="foto1" />
            </div>
            <div className="card">
              <p className="foto3t">Jabba</p>
              <img src={Jaba} alt="" className="foto3" />
            </div>
          </div>
        </Form2>
      </div>
    </>
  );
}

export default Personagens;
