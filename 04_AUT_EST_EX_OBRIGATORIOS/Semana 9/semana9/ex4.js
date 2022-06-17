//declaração de variáveis:
var qtd = 0;// var que recebe valor inserido pelo usuário;

//função que calcula a sequência de Fibonacci a partir do termo n inserido pelo usuário;
function Calc(){
    qtd = Number(document.getElementById("qtd").value); // qtd recebe valor do input;
    var seq = [1]; // var que cria uma lista que começa com o termo 1;

    // estrutura de repetição que soma quantidade de loops até o 2º loop com o último termo da lista;
    for(let i = 0; i< 2; i++){
        seq.push(seq[seq.length - 1] + i);
    }

    // estrutura de repetição que soma o último termo da lista com o penúltimo termo da lista a partir do 2º loop até que chegue no "nésimo" termo inserido pelo usuário;
    for(let i = 2; i<qtd; i++){
        seq.push(seq[seq.length - 2] + seq[seq.length - 1]);
    }
    
    // adiciona sequência na página HTNML;
    document.getElementById("main").innerHTML += `<br/> a sequência de Fibonacci será ${seq}`;
}