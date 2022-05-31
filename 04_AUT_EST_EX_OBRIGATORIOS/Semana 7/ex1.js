//declaração de variáveis
var qtde = 0;
var op = "x"

$(document).ready(function(){
    console.log("oi");
});
 
$("#qtd").focusout(function(){
    qtde = Number($("input[id=qtd]").val());
    console.log(qtde);
});

$("button[id=adc]").click(function(){
    op = "+"
    if (op == "+"){
        qtde++;
        $("#main").append("<br/> "+qtde+" ");
    }
});

$("button[id=ret]").click(function(){
    op = "-"
    if (op == "-"){
        qtde -= 1;
        $("#main").append("<br/> "+qtde+" ");
    }
});


