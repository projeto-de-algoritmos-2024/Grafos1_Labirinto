import React from "react";
import PropTypes from "prop-types";
import "./background.css";

import Fim from "./assets/fim.svg";
import Tras from "./assets/tras.svg";
import TrasFrente from "./assets/tras-frente.svg";
import TrasFrenteDir from "./assets/tras-frente-dir.svg";
import TrasFrenteEsq from "./assets/tras-frente-esq.svg";
import TrasFrenteEsqDir from "./assets/tras-frente-esq-dir.svg";
import TrasDirEsq from "./assets/tras-dir-esq.svg";
import TrasDir from "./assets/tras-dir.svg";
import TrasEsq from "./assets/tras-esq.svg";

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
    TrasDirEsq: TrasDirEsq,
    TrasDir: TrasDir,
    TrasEsq: TrasEsq,
  };

  // Verifica se a propriedade text existe nos caminhos SVG
  const svgPath = svgPaths[props.text] || Tras;

  return (
    <div>
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
    "TrasDirEsq",
    "TrasDir",
    "TrasEsq",
  ]).isRequired,
};
