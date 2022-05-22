//Demorei 4h so pra fazer o mais simples de todos os exercício que foi esse, mas eu queria usar JQuery kkkkkkk
//Variáveis
var val1 = 0;
var val2 = 0;
var operator = "+";
var calc = 0;

//função de carregamento do documento e quando o botão é apertado;
$(document).ready(function(){
    console.log("oi");


$("button").click(function(){

//novos valores que as variáveis de número e operador adquirem após o input do usuário;
     val1 = parseInt($("input[id=valor1]").val());
     val2 = parseInt($("input[id=valor2]").val());
     operator = $("select[id=opselector]").val();

//condições de contas a serem feitas após o input do usuário;
    if (operator == "+") {
        calc = val1 + val2;   
    }
    else if (operator == "-") {
        calc = val1 - val2;
    }
    else if (operator == "*") {
        calc = val1*val2;
    }
    else if (operator == "/"){
        calc = val1/val2;
    }
    else if (operator == "^"){
        calc = val1**val2;
    }
    else if (operator == "%") {
        calc = val1%val2;
    } 
    $("#calc").append("<p> "+val1+" "+operator+" "+val2+" = "+calc+" </p>");
    return calc;

});
});
