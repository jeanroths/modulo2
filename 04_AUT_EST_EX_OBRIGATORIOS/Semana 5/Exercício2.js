//variáveis declaradas;
var cem = 0;
var cinquenta = 0;
var vinte = 0;
var dez = 0;
var cinco = 0;
var dois = 0;
var um = 0;

//funções de carregamento da página e quando o botão é apertado;
$(document).ready(function(){
    console.log("oi");


$("button").click(function(){
    preço = Number($("input[id=preço]").val());
//condições que pegam o preço dado divide pelo valor da nota e o resto é dividido pelas outras notas;
    if (preço >= 100) {
        cem = Math.floor(preço/100);
        preço = preço - cem*100;
    } 

    else if (preço >= 50) {
        cinquenta = Math.floor(preço/50);
        preço = preço - cinquenta*50;
    } 

    else if (preço >= 20) {
        vinte = Math.floor(preço/20);
        preço = preço - vinte*20;
    } 
        
    else if (preço >= 10) {
        dez = Math.floor(preço/10);
        preço = preço - dez*10;
    } 

    else if (preço >= 5) {
        cinco = Math.floor(preço/5);
        preço = preço - cinco*5;

    }  
    else if (preço >= 2) {
        dois = Math.floor(preço/2);
        preço = preço - dois*2;
    } 

    else if (preço >= 1) {
        um = Math.floor(preço/1);
        preço = preço - um*1
    } 

//retorna no div de id= calc o texto com a quantidade de notas usadas para o preço dado;
   return $("#calc").append("<p> "+cem+" notas de cem  "+cinquenta+" notas de cinquenta "+vinte+" notas de vinte "+dez+" notas de dez "+cinco+" notas de cinco "+dois+" notas de dois "+um+" notas de um </p>");
});
});