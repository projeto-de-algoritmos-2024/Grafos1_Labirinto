import React from "react";
import PropTypes from "prop-types";
import "./background.css";

import Fim from "./assets/fim.svg";
import Tras from "./assets/tras.svg";
import TrasFrente from "./assets/tras-frente.svg";
import TrasFrenteDir from "./assets/tras-frente-dir.svg";
import TrasFrenteEsq from "./assets/tras-frente-esq.svg";
import TrasFrenteEsqDir from "./assets/tras-frente-esq-dir.svg";

import { Link } from "react-router-dom";
import "../../pages/menu/menu.css";
export default function Background(props) {
  // Objeto que mapeia os valores de props.text para os caminhos dos arquivos SVG correspondentes
  const svgPaths = {
    Fim: Fim,
    Tras: Tras,
    TrasFrente: TrasFrente,
    TrasFrenteDir: TrasFrenteDir,
    TrasFrenteEsq: TrasFrenteEsq,
    TrasFrenteEsqDir: TrasFrenteEsqDir,
  };

  // Verifica se a propriedade text existe nos caminhos SVG
  const svgPath = svgPaths[props.text] || Tras;

  return (
    <div>
      {props.text === "Fim" && (
        <div className="container-center-end">
          <div className="container">
            <div className="container-text">
              <h1>Parabéns</h1>
              <p>
                Você terminou o labirinto e agora pode rejogar e chegar no final
                por um caminho mais curto.
              </p>
            </div>

            <Link to="/">
              <button className="button-play"> Voltar para o menu </button>
            </Link>
          </div>
        </div>
      )}

      <div className="background">
        <img src={svgPath} alt={`Background for ${props.text}`} />
      </div>
    </div>
  );
}

// Tipo das props
Background.propTypes = {
  text: PropTypes.oneOf([
    "Fim",
    "Tras",
    "TrasFrente",
    "TrasFrenteDir",
    "TrasFrenteEsq",
    "TrasFrenteEsqDir",
  ]).isRequired,
};
