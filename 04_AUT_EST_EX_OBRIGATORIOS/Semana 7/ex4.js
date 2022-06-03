//declaração de variáveis;
var voo = "x";
var pessoas = 0;
var preco = 0;
var select = "y"

//função que é acionada ao apertar o botão para calcular;
function Calc(){

    //guarda o valor do option no select e pega a quantidade de pessoas que vão no voo;
   select = document.getElementById('periodo');
   voo = select.options[select.selectedIndex].value;
   pessoas = Number(document.getElementById("pessoas").value);
   
   //condições dadas no exercício;
    if (voo == "dia" && pessoas < 50){
       preco = 200*pessoas
    }
    else if (voo == "dia" && pessoas >= 50){
       preco = 200*pessoas - (200*pessoas)*0.4
    }
    else if (voo == "noite" && pessoas < 50){
        preco = 100*pessoas
    }
    else if (voo == "noite" && pessoas >= 50){
        preco = 100*pessoas - (100*pessoas)*0.2
    }
    //mostra o resultado na página;
    ShowResult(preco);
    return preco;
}

//função que adiciona a resposta na página HTML;
function ShowResult(res){
    document.getElementById("main").innerHTML += `<br/> ${res} reais.`;
}