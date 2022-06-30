//Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.

//Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.

//Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.


//IDADE
let idade = 18;

 if("idade >= 18"){
    console.log("Cadastro permitido. Informe a data do evento.");
 }  else{console.log("Cadastro não permitido para menores de 18 anos.");
}


//DATA EVENTO
let dataAtual = 24/07/2022;
let dataEvento = 30/07/2022;

if(dataEvento > dataAtual){
    console.log("O cadastro foi permitido. Insira a quantidade dos participantes.");
 }  else{console.log("Data inválida. O cadastro não foi permitido.");
 }


//QUANTIDADE DE PARTICIPANTES
let participantes = ["Lucas", "Maria Eduarda", "Beatriz", "Júlia", "Bruno", "Gabriela"];
let quantParticipantes = 6;

if("quantParticipantes < 100"){
    console.log("Cadastro permitido.");
}    else{console.log("Cadastro não permitido. Limite de participantes excedido.");
}
