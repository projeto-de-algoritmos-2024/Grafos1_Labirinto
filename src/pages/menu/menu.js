import Background from "../../components/Background/background.js";
import { Link } from "react-router-dom";
import "./menu.css";

export default function Menu() {
  return (
    <div className="container-center">
      <div className="container">
        <div className="container-text">
          <h1>Labirinto</h1>
          <p>
            Seja bem-vindo ao jogo do labirinto feito por Luan e Alexia para a
            disciplina de Projetos de Algoritmo. Seu objetivo é achar a saída do
            labirinto pelo menor caminho possível.
          </p>
        </div>

        <Link to="/game">
          <button className="button-play"> Jogar </button>
        </Link>
      </div>

      <Background />
    </div>
  );
}
