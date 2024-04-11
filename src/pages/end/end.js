import Background from "../../components/Background/background.js";
import { Link } from "react-router-dom";
import "../menu/menu.css";

export default function End() {
  return (
    <div className="container-center">
      <div className="container">
        <div className="container-text">
          <h1>Parabéns</h1>
          <p>
            Você terminou o labirinto e agora pode rejogar e chegar no final por
            um caminho mais curto.
          </p>
        </div>

        <Link to="/">
          <button className="button-play"> Voltar para o menu </button>
        </Link>
      </div>

      <Background text="Fim" />
    </div>
  );
}
