/* 
=======================
Declaração de variáveis
=======================
*/

var calcResDiv = "calc";

/* 
=======================
Funções
======================= 
*/

/* Função que calcula uma soma e mostra a operação realizada e o resultado obtido */
function CalcAddAndShow(x, y) {
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    var op = "+";
    var result = Calc(x, y, op); 
    console.log(x,y)
    ShowOp(x, y, op);
    ShowResult(result);
}


/* Função que calcula uma operação entre dois números recebidos como parâmetro */
function Calc(x, y, op){
    var result;
    if (op == "+") {
        result = x + y;
    };
    return result;
}


/* Função que mostra a operação realizada */
function ShowOp(x, y, op){
    document.getElementById(calcResDiv).innerHTML += `<br /> ${x} ${op} ${y} = `;
    //Alternativa: .. += "<br />" + x + " " + op + " " + y + " = "
}


/* Função que mostra o resultado obtido */
function ShowResult(res){
    document.getElementById(calcResDiv).innerHTML += res;
}
