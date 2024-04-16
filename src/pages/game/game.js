import React, { useEffect, useState } from "react";
import "./game.css";
import setaDireita from "./assets/seta-direita.svg";
import setaEsquerda from "./assets/seta-esquerda.svg";
import setaFrente from "./assets/seta-frente.svg";
import setaTras from "./assets/seta-tras.svg";
import Background from "../../components/Background/background.js";
import { Link } from "react-router-dom";

export default function Game() {
  const [backgroundText, setBackgroundText] = useState("");
  const [posicao, setPosicao] = useState([0, 0]);
  const [passos, setPassos] = useState(0);

  const labirinto = [
    [1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1],
    [0, 0, 1, 0, 1],
    [0, 0, -2, 0, 1],
    [0, 0, 1, 1, 1],
  ];
  const tamanho = labirinto.length;

  function BuscaLargura() {
    const fila = [[0, 0, 0]]; // Adicionamos um terceiro elemento para rastrear a distância percorrida
    const visitados = new Set(["0,0"]); // Usamos um conjunto para rastrear vértices visitados

    while (fila.length > 0) {
      const [x, y, dist] = fila.shift();

      if (labirinto[x][y] === -2) {
        return dist; // Se chegarmos à saída, retornamos a distância percorrida até agora
      }

      const movimentos = [
        [x + 1, y], // Baixo
        [x - 1, y], // Cima
        [x, y + 1], // Direita
        [x, y - 1], // Esquerda
      ];

      for (const [nx, ny] of movimentos) {
        if (
          nx >= 0 &&
          nx < tamanho &&
          ny >= 0 &&
          ny < tamanho &&
          labirinto[nx][ny] !== 0 &&
          !visitados.has(`${nx},${ny}`)
        ) {
          fila.push([nx, ny, dist + 1]);
          visitados.add(`${nx},${ny}`);
        }
      }
    }

    return -1; // Se não encontrarmos a saída, retornamos -1
  }
  function mudaPosicao(dx, dy) {
    const novoX = posicao[0] + dx;
    const novoY = posicao[1] + dy;

    if (
      novoX >= 0 &&
      novoX < tamanho &&
      novoY >= 0 &&
      novoY < tamanho &&
      labirinto[novoX][novoY] !== 0
    ) {
      setPosicao([novoX, novoY]);

      if (dx === 1) setBackgroundText("TrasFrente");
      else if (dx === -1) setBackgroundText("TrasFrenteDir");
      else if (dy === 1) setBackgroundText("TrasFrenteEsq");
      else setBackgroundText("TrasFrenteEsqDir");

      setPassos(passos + 1);
    }
  }

  useEffect(() => {
    BuscaLargura();
  }, []); // Executa a buscaBFS uma vez, quando o componente é montado

  const menorCaminho = BuscaLargura(); // Armazena o valor do menor caminho

  return (
    <div>
      {labirinto[posicao[0]][posicao[1]] !== -2 && (
        <div className="container-buttons">
          <div className="container-out">
            <div className="container-position">
              <h2>
                Posição atual: {posicao[0]}, {posicao[1]}
              </h2>
            </div>

            <button
              className="arrow-left button-horizontal"
              onClick={() => mudaPosicao(0, -1)}
            >
              <img src={setaEsquerda} alt={`Seta para esquerda`} />
            </button>

            <div className="container-in">
              <button
                className="arrow-up button-vertical"
                onClick={() => mudaPosicao(1, 0)}
              >
                <img src={setaFrente} alt={`Seta para cima`} />
              </button>

              <button
                className="arrow-down button-vertical"
                onClick={() => mudaPosicao(-1, 0)}
              >
                <img src={setaTras} alt={`Seta para trás`} />
              </button>
            </div>

            <button
              className="arrow-right button-horizontal"
              onClick={() => mudaPosicao(0, 1)}
            >
              <img src={setaDireita} alt={`Seta para direita`} />
            </button>
          </div>
        </div>
      )}

      {labirinto[posicao[0]][posicao[1]] === -2 && (
        <div className="container-center-end">
          <div className="container">
            <div className="container-text">
              <h1>Parabéns</h1>
              <p>
                Você terminou o labirinto com {passos} passos! O menor caminho é
                com {menorCaminho} passos.
              </p>
            </div>

            <Link to="/">
              <button className="button-play"> Voltar para o menu </button>
            </Link>
          </div>
        </div>
      )}

      <Background text={backgroundText} />
    </div>
  );
}
