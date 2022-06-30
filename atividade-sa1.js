// Se a peça possuir um peso superior a 100 gramas, pode cadastrar.

// Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem informando não ter capacidade suficiente.

// Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro.


let listaPecas = ["Mouse", "Desktop", "Notebook", "HD", "Impressora", "Roteador", "Tablet", "Data Show", "Teclado", "Estabilizador", "Pen Drive"];//caixa/lista

let nomePeca = "HD";
let pesoPeca = 300;

if(listaPecas.length >= 10){//Não tem espaço na lista
    console.log("O cadastro não foi permitido. Limite de 10 peças atingido.");
} else {//Tem espaço na lista para cadastrar

    if(pesoPeca >= 100){
        console.log("Cadastro de peça permitido por possuir mais de 100g.");
        if (nomePeca.length < 3) {
            console.log("Atenção, o nome da peça tem que ter 3 ou mais caracteres");
        }
    }
}