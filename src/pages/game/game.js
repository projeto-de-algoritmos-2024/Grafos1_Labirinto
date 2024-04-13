import "./game.css";
import React, { useState } from "react";

import setaDireita from "./assets/seta-direita.svg";
import setaEsquerda from "./assets/seta-esquerda.svg";
import setaFrente from "./assets/seta-frente.svg";
import setaTras from "./assets/seta-tras.svg";

import Background from "../../components/Background/background.js";
import { Link } from "react-router-dom";

export default function Game() {

  const [backgroundText, setBackgroundText] = useState("");
  const [posicao, setPosicao] = useState([0,0]); // posicao inicial
  const [passos, setPassos] = useState(0)
  
  // cria grafo
  const tamanho = 5;
  let grafo = new Array(tamanho);
  for (let i = 0; i < tamanho; i++) {
    grafo[i] = new Array(tamanho).fill(0);
  }
  
  // i(linha), j(coluna)
  grafo[0][0] = 1; 
  grafo[0][1] = 1;
  grafo[0][2] = 1;
  grafo[1][2] = 1;
  grafo[2][2] = 1;
  grafo[3][2] = 1;
  grafo[3][3] = 1;
  grafo[3][4] = -2; // saida
  
  function mudaPosicao(i,j){
    // extrapola os limites do labirinto
    if(i > 0 && posicao[0]+i > tamanho) return;
    else if(i < 0 && posicao[0]+i < 0) return;
    else if(j > 0 && posicao[1]+j > tamanho) return;
    else if(j < 0 && posicao[1]-1 < 0) return;

    // não tem caminho para esta direcao
    if(grafo[posicao[0]+i][posicao[1]+j] === 0){
      return;
    }
    
    // altera a posicao
    setPosicao([posicao[0]+i,posicao[1]+j])
    
    // muda imagem de fundo
    if(i === 1) setBackgroundText("TrasFrente")
    else if(i === -1) setBackgroundText("TrasFrenteDir")
    else if(j === 1) setBackgroundText("TrasFrenteEsq")
    else setBackgroundText("TrasFrenteEsqDir")

    // conta passos
    setPassos(passos+1)
  }

  return (
    <div>
      { grafo[posicao[0]][posicao[1]] !== -2 && (
        <div className="container-buttons">
          <div className="container-out">
          <h2>{grafo[posicao[0]][posicao[1]]}</h2>
          <p>{posicao[0]}, {posicao[1]}</p>

             <button
               className="arrow-left button-horizontal"
               onClick={() => mudaPosicao(0,-1)}
             >
               <img src={setaEsquerda} alt={`Seta para esquerda`} />
             </button>

            <div className="container-in">
              <button
                className="arrow-up button-vertical"
                onClick={() => mudaPosicao(+1,0)}
              >
                <img src={setaFrente} alt={`Seta para cima`} />
              </button>

              <button
                className="arrow-down button-vertical"
                onClick={() => mudaPosicao(-1,0)}
              >
                <img src={setaTras} alt={`Seta para trás`} />
              </button>
            </div>

            <button
              className="arrow-right button-horizontal"
              onClick={() => mudaPosicao(0,+1)}
            >
              <img src={setaDireita} alt={`Seta para direita`} />
            </button>
          </div>
        </div>
      )}
      { grafo[posicao[0]][posicao[1]] === -2 && (
        <div className="container-center-end">
          <div className="container">
            <div className="container-text">
              <h1>Parabéns</h1>
              <p>
                Você terminou o labirinto com {passos} passos! Caso queira jogar novamente é só voltar ao menu inicial.
              </p>
            </div>

            <Link to="/">
              <button className="button-play"> Voltar para o menu </button>
            </Link>
          </div>
        </div>
      )}

      <Background text={backgroundText}/>
    </div>
  );
}
