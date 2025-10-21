//PLN = processamento de linguagem natural
//permitir que máquinas entendam e respondam a linguagem humana, de uma maneira valiosa e significativa; 
//É a interação com a máquina e a IA

//através dela podem, traduzir, analisar sentimentos, resumir e gerar e compreender textos complexos;
 //construir pontes entre máquinas e humanos

 //SubArray é uma parte de array com continuidade:

const array = [1, 2, 3];
const subarrays = [];

for (let i = 0; i < array.length; i++) {
  for (let j = i; j < array.length; j++) {
    subarrays.push(array.slice(i, j + 1));
  }
}

console.log(subarrays);

// O(n) ao quadrado, falta de desempenho (quando o numero dobrar o tempo quadriplica)