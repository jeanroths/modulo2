// declaração de variáveis:
var numero = 0; // variável para pegar o valor do usuário;
var divisao = 0; // variável que guardará a divisão do numero por cem para pegar o valor da centena;
var numero_inicio = 0; // = numero;

//função responsável por fazer o cálculo para saber se o dígito da centena é impar ou par;
function Calc(){
    numero = Number(document.getElementById("numero").value);
    numero_inicio = Number(document.getElementById("numero").value);

    //divisão pega o valor da divisão do número colocado pelo usuário por 100 e arredonda para baixo: exemplo -> 423/100 = 4;
    divisao = Math.floor(numero/100)

    //se o resto da divisão por 2 for igual a 0, o número é par;
    if(divisao%2 == 0){
        document.getElementById("main").innerHTML += `<br/> o dígito ${divisao} da centena do número ${numero_inicio} é PAR`
    }
    //se o resto da divisão por 2 for diferente de 0, o número é ímpar;
    else if(divisao%2 != 0){
        document.getElementById("main").innerHTML += `<br/> o dígito ${divisao} da centena do número ${numero_inicio} é ÍMPAR`
    }
}
