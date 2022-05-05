//declaração de variáveis
var calcResDiv = "calc"
const g = 10

// t é dado em s e v0 em m/s


//funções:

//função que calcula o tempo em segundos de subida do objeto
function CalcTime(v0, g){
    var operator = "/";
    var v0 = document.getElementById("v0").value;
    var t = Calc(v0, operator, g);
    ShowOperationT(v0, operator, g);
    ShowResult(t);

}

function CalcHMax(v0, g){
    var operator = "/";
    var v0 = document.getElementById("v0").value;
    var h = CalcH(v0, operator, g);
    console.log(v0)
    ShowOperationH(v0, operator, g);
    ShowResult(h);
}
//funções que calculam a operação a partir do valor v0

function Calc(v0, operator, g){
    if(operator == "/"){
        t = v0/g;
       
    }
    
    return t;
};                                      
function CalcH(v0, operator, g){
    if(operator == "/"){
        h = (v0*v0)/(2*g);
    }
    return h;
}

//funções que mostram a operação realizada
function ShowOperationT(v0, operator, g){
    document.getElementById(calcResDiv).innerHTML += `<br /> ${v0} ${operator} ${g} = `;
}
function ShowOperationH(v0, operator, g){
    document.getElementById(calcResDiv).innerHTML += `<br /> ${v0*v0} ${operator} ${2*g} = `;
}



//função que mostra o resultado obtido
function ShowResult(res){
    document.getElementById(calcResDiv).innerHTML += res;
}