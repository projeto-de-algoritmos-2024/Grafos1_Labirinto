import React from "react";
import ReactDOM from "react-dom";
import Labirinto from "../src/components/labirinto.jsx";

function App() {
  return (
    <div>
      <Labirinto />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
