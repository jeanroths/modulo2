//declaração de variáveis;
var pessoas = 0;
var media_geral = 0;
var media_provas = 0;
var media_trabalhos = 0;
var media_aluno = 0;
var min_prova = 0;
var max_prova = 0;
var min_trab = 0;
var max_trab = 0;
var soma_prova = 0;
var soma_trabalho = 0;
var notas_provas = [];
var notas_trabalhos = [];
var nota_prova = 0;
var nota_trab = 0;
var numerador_geral = 0;
var notas_individuais = [];

// função que pega a quantidade de alunos que o usuário quer logo após o botão enviar ser apertado, e adiciona a quantidade de novos inputs de acordo com o valor inputado pelo usuário;
function Qtd_Alunos(){
    pessoas = Number(document.getElementById("qtd_alunos").value)
    //laço de repetição que adiciona os inputs de acordo com o valor dado;
    for(let i = 1; i <= pessoas; i++) {
            document.getElementById('inputs').innerHTML += `<label> Aluno ${i}: </label> <input id="prova${i}" placeholder="nota prova ${i}"> <input id="trab${i}" placeholder="nota trabalho ${i}"> <br />`;
    }
}
//função que é acionada ao apertar o botão de calcular e começa a atribuir as contas às variáveis para retorná-las posteriormente;
function Calc(){
    //laço de repetição que pega os valores colocados nos inputs das notas e usa eles para fazer as contas;
    for(let i = 1; i <= pessoas; i++){  
        nota_prova = Number(document.getElementById(`prova${i}`).value);
        nota_trab = Number(document.getElementById(`trab${i}`).value);
        soma_prova += nota_prova;
        soma_trabalho += nota_trab;
        media_aluno = ((nota_prova*2) + (nota_trab*3))/5;
        numerador_geral += media_aluno;
        media_geral = numerador_geral/pessoas;
        media_provas = soma_prova/pessoas;
        media_trabalhos = soma_trabalho/pessoas;
        
        //adiciona as notas individuais dos alunos em uma lista para ordená-los posteriormente;
        notas_provas.push(nota_prova);
        notas_trabalhos.push(nota_trab);
        //essa parte seria responsável por adicionar a média individual de cada aluno na página HTML, mas eu não estou conseguindo ;-;
        notas_individuais.push(media_aluno); // aqui eu pegaria a média de cada aluno e colocaria na lista notas_individuais;

    }
    //eu criei esse laço de repetição para que mostrasse no HTML as notas ao percorrer os elementos na lista das notas, mas ele ta lendo i acima da ultima posiçãop da lista por algum motivo;
    for(let i = 1; i<notas_individuais[notas_individuais.length - 1]; i++){
        document.getElementById("main").innerHTML += `<br/>A média do aluno${i} foi ${notas_individuais[notas_individuais.length - i]}`;
    }
    console.log(notas_individuais);
    // ordena as notas das provas e trabalhos em ordem crescente em suas respectivas listas;
    notas_provas.sort((a,b) => a-b);
    notas_trabalhos.sort((a,b) => a-b);

    //retorna as notas mais baixas e mais altas das provas e trabalhos;
    min_prova = notas_provas[0];
    max_prova = notas_provas[notas_provas.length - 1];

    min_trab = notas_trabalhos[0];
    max_trab = notas_trabalhos[notas_trabalhos.length - 1];


    //adiciona na página todas as respostas que o exercício pede com excessão das notas individuais de cada aluno;
    document.getElementById("main").innerHTML += `<br/>A média geral foi ${media_geral}`;
    document.getElementById("main").innerHTML += `<br/>A média das provas foi ${media_provas}`;
    document.getElementById("main").innerHTML += `<br/>A média dos trabalhos foi ${media_trabalhos}`;
    document.getElementById("main").innerHTML += `<br/>A menor nota das provas foi ${min_prova}`;
    document.getElementById("main").innerHTML += `<br/>A maior nota das provas foi ${max_prova}`;
    document.getElementById("main").innerHTML += `<br/>A menor nota dos trabalhos foi ${min_trab}`;
    document.getElementById("main").innerHTML += `<br/>A maior nota dos trabalhos foi ${max_trab}`;

}
