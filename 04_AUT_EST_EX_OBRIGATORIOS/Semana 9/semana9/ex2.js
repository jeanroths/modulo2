//declaração de variáveis:
var numero = 0; // variável que recebe valor inserido pelo usuário;
var valores = [];// variável que adiciona o valor inserido pelo usuário em uma lista;
var soma = 0;// variável que soma os dígitos do valor inserido pelo usuário;
var number_valores = []; // variável que transforma os valores do tipo string em números na lista;

//Função que calcula a soma dos dígitos do valor inserido pelo usuário;
function Calc(){
    numero = document.getElementById("numero").value; //pegando o valor do usuário e atribuindo à numero;
    valores = numero.split("");// método split vai pegar o valor colocado pelo usuário e separar os dígitos colocando-os na lista valores;
    number_valores = valores.map(Number);// método map, pega os valores separados na lista anterior que estão como strings e os converte para valor numérico;
    console.log(number_valores);
    
    //estrutura de repetição que passa pelas posições da lista number_valores e soma seus elementos;
    for(let i = 0; i < number_valores.length; i++) {
        soma += number_valores[i];
}
// adiciona resposta no HTML;
document.getElementById("main").innerHTML += `<br/> a soma dos números ${number_valores} é igual a ${soma}`;
};