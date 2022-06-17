//declaração de variáveis:
var nome1 = "a"; // variável que recebe input nome1;
var nome2 = "b"; // variável que recebe input nome2;
var nome3 = "c"; // variável que recebe input nome3;
var listaNomes = []; // variável que recebe na lista nomes inseridos pelo usuário;

//função responsável por ordenar em ordem alfbética os nomes;
function Listar(){
    nome1 = document.getElementById("nome1").value; //atribuindo valor do input nome1 para nome1;
    nome2 = document.getElementById("nome2").value; //atribuindo valor do input nome2 para nome2;
    nome3 = document.getElementById("nome3").value; //atribuindo valor do input nome3 para nome3;
    listaNomes.push(nome1, nome2, nome3); // adicionando nomes da lsitaNomes;
    console.log(listaNomes);
    
    // método organiza os nomes na lista em ordem alafabética que contém uma função que organiza mesmo que comecem com letras maiúsculas ou minúsculas;
    listaNomes.sort(function(a,b){
        let x = a.toUpperCase(),
            y = b.toUpperCase();

        return x == y ? 0 : x > y ? 1 : -1;
    });

    //adiciona resultado ná página;
    document.getElementById("main").innerHTML += `<br/> ${listaNomes}`
    listaNomes = [];
   
}