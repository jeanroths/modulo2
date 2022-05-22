

//função que roda assim que o botão de calcular é apertado 
function Calc(){
    var input = document.getElementById("lista").value; //input de valores strings pra lista
    var lista = JSON.parse("[" +input+"]");//transforma as strings em lista 
    bubbleSort(lista);
    var ordenado = lista;
    document.getElementById("calc").innerHTML += `<br /> ${lista} `;//mostra a lista ordenada
    var valorfoco = Number(busca_binária(ordenado));
    OrdemValorfoco(valorfoco);

//função bubbleSort que organiza os elementos em ordem crescente
function bubbleSort(itens) {
    var length = itens.length;  
    for (var i = 0; i < length; i++) { 
          for (var j = 0; j < (length - i - 1); j++) { 
                   if(itens[j] > itens[j+1]) {
                           var tmp = itens[j]; 
                itens[j] = itens[j+1]; 
                itens[j+1] = tmp; 
            }
        }        
    }
    return itens;
}


}
//função de busca binária que procura onde o valor foco está presente
function busca_binária(array){
    debugger; //o programa ta dando errado e eu não sei o porque ;-;
    var min = 0;
    var list = 0;

// esse for analisa quantos elementos possuem o array
    for(let key in array) {
        if(array.hasOwnProperty(key)){
            list++
        }
    }
//quando eu rodo o debugger ele mostra que o valor-foco inputado não é o mesmo que recebe, por algum motivo ele ta recebendo 0;
    var foco = Number(document.getElementById("valorfoco").value);
    var max = list;
    var chute = Math.floor((max+min)/2);
    
//condição para achar o valor foco e sua posição
while (array[chute] != foco){
    if (max < min){
        return -1;
    }
    else if (array[chute] == foco){
        return chute;
    }
    else if (array[chute] < foco){
        min = chute + 1;
    }
    else if (array[chute] > foco){
        max = chute - 1;
    }
}
}
//função que mostraria a resposta da busca binária, ou seja, o valor foco e sua posição;
function OrdemValorfoco(pos){
    document.getElementById("calc").innerHTML += `o valor está na ${pos + 1} ºposição `;
}
