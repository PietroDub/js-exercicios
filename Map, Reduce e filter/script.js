//Map Manipulação de arrays

const numeros = [1,2,3,4,5,6];
const dobro = numeros.map(numero => numero * 2);
const quadruplo = numeros.map((numero) => {
    return numero * 4;
});

console.log(dobro);
console.log(quadruplo);

const produtos = [
  { id: 1, nome: "Smartphone Galaxy S21", preco: 3999.99, temDesconto: true, quantidade: 1 },
  { id: 2, nome: "Notebook Dell Inspiron", preco: 4500.00, temDesconto: false, quantidade: 3 },
  { id: 3, nome: "Smart TV LG 55\"", preco: 2799.00, temDesconto: true, quantidade: 5 },
  { id: 4, nome: "Fone de Ouvido Bluetooth JBL", preco: 299.90, temDesconto: false, quantidade: 2 },
  { id: 5, nome: "Câmera DSLR Canon", preco: 3200.00, temDesconto: true, quantidade: 1 },
  { id: 6, nome: "Tablet iPad Air", preco: 4199.00, temDesconto: false, quantidade: 8 },
  { id: 7, nome: "Console PlayStation 5", preco: 4699.00, temDesconto: true, quantidade: 2 },
  { id: 8, nome: "Smartwatch Apple Watch", preco: 2499.00, temDesconto: false, quantidade: 7 },
  { id: 9, nome: "Impressora HP Multifuncional", preco: 599.90, temDesconto: true, quantidade: 5 },
  { id: 10, nome: "Caixa de Som Portátil Sony", preco: 1000.00, temDesconto: false, quantidade: 3 }
];

const NovosProdutos = produtos.map((produto) => {

    const novopreco = produto.temDesconto ? (produto.preco * 0.9) : produto.preco;
    //If, else

    return {
       id: produto.id,
       nome: produto.nome,
       preco: novopreco.toLocaleString('pt-br', {
        style: 'currency', currency: 'BRL'
       }),
       quantidade: produto.quantidade  
    }
})

console.log(NovosProdutos);


const numeros1 = [1,2,3,4,5,6];
const somas = numeros1.reduce((acumulador, atual) => {
    const total = acumulador + atual;
    return total;
}//valor do acumulador caso queira
)

//QUAL SERÁ O FATURAMENTO, SE VENDERMOS TODO O ESTOQUE

const totalVendas = produtos.reduce((acumulador, produto) => {
    const total = acumulador + (produto.preco * produto.quantidade);
    return total;
}, 0);
console.log(totalVendas.toLocaleString('pt-br', {
        style: 'currency', currency: 'BRL'}));


//Filter somente os em promoção

const numeros2 = [1,2,3,4,5,6,7,8,9,10];

const pares = numeros2.filter(numero => {
    return numero % 2 === 0;
})

console.log(pares);

const SomentePromo = produtos.filter(produto => produto.temDesconto);
// ele é inteligente, retorna o verdadeiro
console.log(SomentePromo);


//todos juntos
//Chegou mais 10 de cada produto, mas quer os que tem desconto e a soma deles

const faturaTotal = produtos.map(produto => {
    return {...produto, quantidade: produto.quantidade + 10};
}).filter(produto => produto.temDesconto).reduce((acumulador,produto) => acumulador + (produto.preco * produto.quantidade)); 

console.log(faturaTotal.toLocaleString('pt-br', {
        style: 'currency', currency: 'BRL'}));