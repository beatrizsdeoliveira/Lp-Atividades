//Considere a quantidade de alunos presentes na sala, percorra do zero até o número total de alunos e retornar os seguintes resultados:

//Se o número for par, escreva "par" e o número correspondente.
//Se o númer for ímpar, escreva "ímpar" e o número correspondente.
//Se  número for zero, escreva "zero" e o número correspondente.


let alunos = 16;

for(let i=0; i <= alunos; i++) {
    
    if(i==0){
        console.log(`Zero: ${i}`);
    } else if(i % 2 == 0){//par
        console.log(`Par: ${i}`);
    } else{
        console.log(`Ímpar: ${i}`);
    }
}