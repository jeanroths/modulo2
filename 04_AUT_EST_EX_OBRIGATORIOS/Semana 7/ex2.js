//definição das variáveis
var txt1 = "x";
var txt2 = "y";

//função de carregamento da página
$(document).ready(function(){
    console.log("oi");
});

//função que é acionada quando o botão é apertado e pega as váriaveis
$("button[id=change]").click(function(){
    txt1 = $("input[id=in1]").val();
    txt2 = $("input[id=in2]").val();

    //aqui as propriedades das caixas de input estão sendo alteradas pelos valores de uma em outra
    $("#in1").prop(txt1);
    $("#in1").val(txt2);

    $("#in2").prop(txt2);
    $("#in2").val(txt1);

    //para que haja a troca novamente os valores dos inputs precisarão estar como estavam no início
    txt1 = $("input[id=in1]").val();
    txt2 = $("input[id=in2]").val();
});
