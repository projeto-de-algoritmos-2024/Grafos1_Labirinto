const tamanho = 5;

let grafo = new Array(tamanho);

for (let i = 0; i < tamanho; i++) {
  grafo[i] = new Array(tamanho).fill(0);
}

grafo[0][0] = -1; // inicio
grafo[0][1] = 1;
grafo[0][2] = 1;
grafo[0][3] = 1;
grafo[0][4] = 1;

grafo[1][0] = 1;
grafo[1][1] = 1;
grafo[1][2] = 1;

grafo[2][0] = 1;
grafo[2][2] = 1;

grafo[3][0] = 1;
grafo[3][2] = 1;
grafo[3][3] = 1;
grafo[3][4] = 2; // saida

grafo[4][0] = 1;
grafo[4][1] = 1;

export default grafo;

// for (let i = 0; i < tamanho; i++) {
//     process.stdout.write(grafo[i].join(' '));
//     if (i !== tamanho - 1) {
//         process.stdout.write('\n');
//     }
// }

// console.log("\n");
