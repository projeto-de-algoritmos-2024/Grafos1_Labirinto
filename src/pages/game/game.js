import "./game.css";
import React, { useEffect, useState } from "react";

import setaDireita from "./assets/seta-direita.svg";
import setaEsquerda from "./assets/seta-esquerda.svg";
import setaFrente from "./assets/seta-frente.svg";
import setaTras from "./assets/seta-tras.svg";

import Background from "../../components/Background/background.js";
import { Link } from "react-router-dom";

export default function Game() {

  const [backgroundText, setBackgroundText] = useState("");
  const [posicao, setPosicao] = useState([0,0]);
  const [passos, setPassos] = useState(0);
  const [caminho, setCaminho] = useState(0);
  
  // cria labirinto
  const labirinto = [
    [1,1,1,0,0],
    [0,1,1,0,0],
    [0,0,1,0,0],
    [0,0,1,1,-2],
    [0,0,0,0,0]
  ]
  const tamanho = labirinto[1].length;

  function BuscaProfundidade(){
      let cam = 0;
      const fila = []
      const visitados = []

      fila.push([0,0]);
      visitados.push([0,0]);

      var frente, tras, direita, esquerda;
      while (fila.length > 0){
        const vertice = fila.pop();
        if(labirinto[vertice[0]][vertice[1]] === -2 ){ 
          setCaminho(cam);
        }

        // inicia posicao somente se não extrapolar algum limite do labirinto
        frente = tras = direita = esquerda = null;
        if(vertice[0]+1 < tamanho) frente = [vertice[0]+1,vertice[1]];
        if(vertice[0]-1 > 0) tras = [vertice[0]-1,vertice[1]];
        if(vertice[1]+1 < tamanho) direita = [vertice[0],vertice[1]+1];
        if(vertice[1]-1 > 0) esquerda = [vertice[0],vertice[1]-1];

        const dir = [frente,tras,direita,esquerda];
        for(let i of dir){
          console.log(i)
          if(i && labirinto[i[0]][i[1]] === 1 && visitados.indexOf(i) === -1){
            visitados.push(i);
            fila.push(i);
          }
        }
        ++cam;
      }
  }

  function mudaPosicao(i,j){
    // extrapola os limites do labirinto
    if(posicao[0]+i > tamanho) return;
    else if(posicao[0]+i < 0) return;
    else if(posicao[1]+j > tamanho) return;
    else if(posicao[1]+j < 0) return;

    // não tem caminho para esta direcao
    if(labirinto[posicao[0]+i][posicao[1]+j] === 0){
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
      { labirinto[posicao[0]][posicao[1]] !== -2 && (
        <div className="container-buttons">
          <div className="container-out">
          <h2>{labirinto[posicao[0]][posicao[1]]}</h2>
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

      { labirinto[posicao[0]][posicao[1]] === -2 && (
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
