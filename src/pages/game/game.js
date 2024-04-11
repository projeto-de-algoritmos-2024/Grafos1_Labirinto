import "./game.css";
import React, { useState } from "react";

import setaDireita from "./assets/seta-direita.svg";
import setaEsquerda from "./assets/seta-esquerda.svg";
import setaFrente from "./assets/seta-frente.svg";
import setaTras from "./assets/seta-tras.svg";

import Background from "../../components/Background/background.js";

export default function Game() {
  const [backgroundText, setBackgroundText] = useState("");

  return (
    <div>
      {backgroundText !== "Fim" && (
        <div className="container-buttons">
          <div className="container-out">
            <button
              className="arrow-left button-horizontal"
              onClick={() => setBackgroundText("TrasFrenteEsq")}
            >
              <img src={setaEsquerda} alt={`Seta para direita`} />
            </button>
            <div className="container-in">
              <button
                className="arrow-up button-vertical"
                onClick={() => setBackgroundText("TrasFrente")}
              >
                <img src={setaFrente} alt={`Seta para direita`} />
              </button>
              <button
                className="arrow-down button-vertical"
                onClick={() => setBackgroundText("Tras")}
              >
                <img src={setaTras} alt={`Seta para direita`} />
              </button>
            </div>
            <button
              className="arrow-right button-horizontal"
              onClick={() => setBackgroundText("TrasFrenteDir")}
            >
              <img src={setaDireita} alt={`Seta para direita`} />
            </button>
          </div>
        </div>
      )}

      <Background text={backgroundText} />
    </div>
  );
}
