import React from 'react';

class Labirinto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labirinto: [
        [0, 0, 0, 1, 1],
        [1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1],
        [1, 1, 0, 0, 0],
        [1, 1, 1, 1, 1]
      ], // 1 representa parede, 0 representa caminho
      personagem: {
        x: 0, // coordenada x inicial do personagem
        y: 0  // coordenada y inicial do personagem
      }
    };
  }

  moverPersonagem = (dx, dy) => {
    this.setState(prevState => {
      const newX = prevState.personagem.x + dx;
      const newY = prevState.personagem.y + dy;

      // Verificar se a nova posição é uma parede ou está fora dos limites do labirinto
      if (
        newX >= 0 &&
        newX < prevState.labirinto.length &&
        newY >= 0 &&
        newY < prevState.labirinto[0].length &&
        prevState.labirinto[newX][newY] === 0
      ) {
        return { personagem: { x: newX, y: newY } };
      }

      return null; // Não fazer nada se a nova posição for inválida
    });
  };

  render() {
    return (
      <div>
        <h2>Labirinto</h2>
        <table>
          <tbody>
            {this.state.labirinto.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    style={{
                      width: 20,
                      height: 20,
                      background: cell === 1 ? 'black' : 'white'
                    }}
                  >
                    {/* Adicionar o personagem como um círculo */}
                    {this.state.personagem.x === rowIndex &&
                      this.state.personagem.y === cellIndex && (
                        <div
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: '50%',
                            background: 'red'
                          }}
                        />
                      )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {/* Adicionar botões para mover o personagem */}
        <button onClick={() => this.moverPersonagem(-1, 0)}>Cima</button>
        <button onClick={() => this.moverPersonagem(1, 0)}>Baixo</button>
        <button onClick={() => this.moverPersonagem(0, -1)}>Esquerda</button>
        <button onClick={() => this.moverPersonagem(0, 1)}>Direita</button>
      </div>
    );
  }
}

export default Labirinto;