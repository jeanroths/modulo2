//declaração de variáveis
var qtde = 0;

$(document).ready(function(){
    console.log("oi");
});
 
qtde = Number($("input[id=qtd]").val());

$("button[id=adc]").click(function(){
    qtde ++;
    $("#main").append("<br/> "+qtde+" ");
});

$("button[id=ret]").click(function(){
    qtde -= 1;
    $("#main").append("<br/> "+qtde+" ");
});


