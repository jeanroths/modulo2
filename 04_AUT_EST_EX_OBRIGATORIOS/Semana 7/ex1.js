//declaração de variáveis
var qtde = 0;

//função de carregamento da página;
$(document).ready(function(){
    console.log("oi");
});
 //função que tira de foco o valor dado pelo usuário na programação para que esse input seja lido e seja alterado no foco do resto da programação;
$("#qtd").focusout(function(){
    qtde = Number($("input[id=qtd]").val());
    console.log(qtde);
});

//função de quando o botão de adicionar é clicado 
$("button[id=adc]").click(function(){
        qtde++;// adiciona 1 no valor dado pelo usuário;
        $('#qtd').prop(qtde); // altera a propriedade do campo de input;
        $('#qtd').val(qtde);// muda o valor para a nova quantidade que é o valor + 1;
});

$("button[id=ret]").click(function(){
        qtde --;//retira 1 no valor dado pelo usuário;
        $('#qtd').prop(qtde);// altera a propriedade do campo de input;
        $('#qtd').val(qtde);// muda o valor para a nova quantidade que é o valor - 1;
});


