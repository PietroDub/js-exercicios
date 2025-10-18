
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input5 = '';
process.stdin.on('data', data => input5 += data);
process.stdin.on('end', () => {
    
    const frase = "Eu gosto de programar";
    const palavras = frase.split();
    console.log(`A frase possui ${palavras.length} palavras`);

    const format2 = frase.trim().toLowerCase();
    console.log(format2);

    const first = palavras[0];
    const last = 0;
    for(let i = 0; i <= palavras.length; i++){
        if(i === palavras.length){
            last = palavras[i];
        }
    }
    console.log(`Primeira palavra ${first}`);
    console.log(`Última palavra ${last}`);

    const frase2 = "JS é a melhos linguagem pois JS é não tipado e muito bom!";
    const frasejava = frase2.replace("JS", "javascript");
    console.log(frasejava);

    const frase3 = "arroz é o goat";
    const tresletras = frase3.slice(0,3);
    console.log(tresletras);
    //ou
    let n = 3;
    for(let i = 0; i <= n; i++){
        console.log(frase3.charAt(i));
    }
});


//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input4 = '';
process.stdin.on('data', data => input4 += data);
process.stdin.on('end', () => {
    const numeros = [2, 4, 6];
    const dobro = numeros.map(n => n * 2);
    console.log(dobro);
    
});

//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input6 = '';
process.stdin.on('data', data => input6 += data);
process.stdin.on('end', () => {
    const nomes = ["Ana", "Bruno", "Carla"];
    const maiorde4 = nomes.map(n => nomes.length > 4);
    console.log(maiorde4);
});

//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', data => input += data);
process.stdin.on('end', () => {
    const numeros = [1, 2, 3, 4, 5, 6];
    const soma = numeros.reduce((acumulador, n) => acumulador + n , 0);
    console.log(soma);
});

//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input7 = '';
process.stdin.on('data', data => input7 += data);
process.stdin.on('end', () => {
    const produtos = [
  { id: 1, nome: "Smartphone Galaxy S21", preco: 99.99, temDesconto: true, quantidade: 1 },
  { id: 2, nome: "Notebook Dell Inspiron", preco: 4500.00, temDesconto: false, quantidade: 3 },
  { id: 3, nome: "Smart TV LG 55\"", preco: 2799.00, temDesconto: true, quantidade: 5 },
  { id: 4, nome: "Fone de Ouvido Bluetooth JBL", preco: 299.90, temDesconto: false, quantidade: 2 }
]

    const menor = produtos.map(n => n.preco < 100);
    console.log(menor);
});

//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input10 = '';
process.stdin.on('data', data => input10 += data);
process.stdin.on('end', () => {
    const idades = [12, 15, 17, 19, 22, 16, 30];
    const maior = idades.find(n => (n >= 18));
    console.log(maior);
});

//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input11 = '';
process.stdin.on('data', data => input11 += data);
process.stdin.on('end', () => {
    const numeros = [1, 2, 3, 4, 5, 6];
    const par = numeros.every(n => (n % 2 === 0));
    console.log(par);
});

//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input12= '';
process.stdin.on('data', data => input12 += data);
process.stdin.on('end', () => {
    const numeros = [1, 2, 3, 4, 5, 6];
    const par = numeros.every(n => (n % 2 === 0));
    console.log(par);

    const negativo = numeros.some(n => (n < 0));
    console.log(negativo);
});

//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input13= '';
process.stdin.on('data', data => input13 += data);
process.stdin.on('end', () => {
    const numeros = [3, 4, 5, 6 , 1, 2];
    const notaAlta = numeros.sort((a, b) => a-b);
    for(let i = 0; i < notaAlta.length; i++){
        if(i === notaAlta.length){
            console.log(notaAlta[i]);
        }
    }
});


// 1. Objeto com informações de produto
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input15= '';
process.stdin.on('data', data => input15 += data);
process.stdin.on('end', () => {
    const produto = {
    nome: "Notebook",
    preco: 3500,
    estoque: 8
    };
    console.log(Object.values(produto));

});

// 2. Objeto simples para transformar em JSON
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input16= '';
process.stdin.on('data', data => input16 += data);
process.stdin.on('end', () => {
    const pessoa = {
    nome: "Ana",
    idade: 20
};

    const TextoJson = JSON.stringify(pessoa);
});

// 3. String JSON para converter em objeto
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input17= '';
process.stdin.on('data', data => input17 += data);
process.stdin.on('end', () => {
    const textoJSON = '{"nome":"Carlos","idade":25,"cidade":"São Paulo"}';
    const objeto = JSON.parse(textoJSON);
    console.log(objeto);
});
// 4. Array de objetos com nome e quantidade
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input18= '';
process.stdin.on('data', data => input18 += data);
process.stdin.on('end', () => {
    const estoque = [
  { nome: "Teclado", quantidade: 5 },
  { nome: "Mouse", quantidade: 8 },
  { nome: "Monitor", quantidade: 3 },
  { nome: "Cadeira", quantidade: 2 }
];

    const total = estoque.reduce((acumulador, prod) => (acumulador + prod.quantidade), 0);
    console.log(total);
});

// 5. Objeto para exibir pares [chave, valor]
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input19= '';
process.stdin.on('data', data => input19 += data);
process.stdin.on('end', () => {
    const carro = {
     marca: "Toyota",
     modelo: "Corolla",
     ano: 2022,
     cor: "Prata"
    };

    console.log(Object.entries(carro));
});

//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input21 = '';
process.stdin.on('data', data => input21  += data);
process.stdin.on('end', () => {
    let decimal = 0.9;
    let arredondado = Math.round(decimal);
    console.log(arredondado);
});

//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input22 = '';
process.stdin.on('data', data => input22  += data);
process.stdin.on('end', () => {
    const numero = [1, 5, 8];
    console.log(Math.max(numero));
});

//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input23 = '';
process.stdin.on('data', data => input23  += data);
process.stdin.on('end', () => {
    console.log(Math.random(0, 10));
});

//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input24 = '';
process.stdin.on('data', data => input24  += data);
process.stdin.on('end', () => {
    const num = 81;
    console.log(Math.sqrt(num));
});

//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input25 = '';
process.stdin.on('data', data => input25  += data);
process.stdin.on('end', () => {
   const string = "10.75";
   const num = Number.parseFloat(string);
   const dobro = num * 2;
   console.log(dobro);
});

//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input26 = '';
process.stdin.on('data', data => input26  += data);
process.stdin.on('end', () => {
   const nomes = "Anna Letíca flor gouveia";
   const array = nomes.split(" ");
   const maiúsculas = array.filter(nome => ((nome.charAt(0)) === (nome.charAt(0).toLocaleUpperCase)));
   console.log(maiúsculas);
});

//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input27 = '';
process.stdin.on('data', data => input27  += data);
process.stdin.on('end', () => {
   const frase = "Gostar de pandas vermelhos";
   const array = frase.split(" ");
   const a = array.reduce((acumulador, palavra) => {
      for(let i = 0; i <= palavra.length; i++){
         if(palavra.charAt(i) == 'a'){
            acumulador++;
         }
      }
      return acumulador;
   })
   console.log(a);
});

//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input28 = '';
process.stdin.on('data', data => input28  += data);
process.stdin.on('end', () => {
    const estoque = [
    { nome: "Teclado", preco: 50 },
    { nome: "Mouse", preco: 80 },
    { nome: "Monitor", preco: 30 },
    { nome: "Cadeira", preco: 20 }
    ];
    const maiorQue50 = estoque.map(n => n.preco > 50);
    console.log(maiorQue50);
});


//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input29 = '';
process.stdin.on('data', data => input29  += data);
process.stdin.on('end', () => {
     const numeros = [3, 4, 5, 6 , 1, 2];
     const redunum = numeros.reduce((acumulador, num) => (num + acumulador), 0);
     const media = parseInt(redunum) / 5;
     console.log(media);
});

//-------------------------------------------------------

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input30 = '';
process.stdin.on('data', data => input30  += data);
process.stdin.on('end', () => {
     const frase = "Gostar de pandas vermelhos";
     const palavras = frase.split(' ');
     palavras.sort((a, b) => a - b);

     console.log(palavras);
});