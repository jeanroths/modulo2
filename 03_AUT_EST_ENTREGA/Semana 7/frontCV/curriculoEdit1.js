
console.log("oiii");
var hptxt = 'Linkedin';
var url = 'https://www.linkedin.com/in/jean-lucas-rothstein-machado-345872231/'; console.log("acesse meu" + hptxt.link(url));

//document.onreadystatechange = function () {
    //if (document.readyState == "complete") {
        //console.log('oi');
        //document.getElementById("lista").innerHTML += "<li>Acesse meu <a href="+url+">"+hptxt+"</a></li>"; 
    //}
//};

$(document).ready(function(){
    console.log("oi");
    $("#lista").append("<li> Acesse meu <a href='"+url+"'>"+hptxt+" </a></li>");
});
    