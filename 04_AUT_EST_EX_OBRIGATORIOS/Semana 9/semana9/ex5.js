//declaração de variáveis:
var input1 = 0; // var que recebe valor inserido pelo usuário no primeiro campo;
var input2 = 0; // var que recebe valor inserido pelo usuário no segundo campo;
var primos = []; // var que coloca todos os números primos no intervalo definido pelos 2 inputs no array;

// função que é responsável por colocar os valores no intervalo definido na lista e por devolver a resposta na página HTML;
function Feedback(){
var lista = []; // var que recebe todos os números entre o intervalo definido;


    input1 = Number(document.getElementById("valor1").value); // valor do campo 1 atribuído ao input1;
    input2 = Number(document.getElementById("valor2").value); // valor do campo 2 atribuído ao input2;

    lista.push(input1); // valor do input1 adicionado à lista;

    //estrutura de repetição que adiciona a soma do valor do loop ao input 1 e adiciona na lista até o valor do input2;
    for(let i = 1; i<input2; i++){
        lista.push(input1+i);
    }
    lista.pop(); //retira o último valor que a soma do for adiciona no último loop;
    lista.push(input2); //adiciona o input 2 à lista;
    console.log(lista);



 lista.forEach(Primo); // executa a função "Primo para cada elemento"
 lista = []; //torna a variável lista vazia novamente para recomeçar com novos valores nos campos;
 document.getElementById("main").innerHTML += `<br/> os primos nesse intervalo são ${primos}`;// adiciona resultado na página HTML;

}
//função que devolve os números primos;
 function Primo(numero){
    var divisores=0; //var que receberá quantidade de divisores dos elementos analisados;
  
    //estrutura de repetição que a partir do valor 1 divide o elemento pelos valores no loop e caso o resto da divisão seja 0, adiciona 1 divisor e caso os divisores sejam exatamente igual a dois desse elemento, o número será primo e se passar de 2 divisores ou ter menos, não será primo;
    for(var count=1 ; count<=numero ; count++)
    if(numero % count == 0){
         divisores++;
     }
    if(divisores==2){
        console.log("é primo");
        primos.push(numero) // adiciona o elemento na lista de primos;
    }
    else{
        console.log("não é primo")
    }
  }
