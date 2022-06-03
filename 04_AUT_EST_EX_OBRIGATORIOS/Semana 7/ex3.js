//função que pega o form do HTML após ser submetido ao documento
document.getElementById("tel").onsubmit = function() {
    let fone = document.getElementById('tel').elements; // ao pegar os elementos corretos como indicado no input do telefone ele devolve um alert de agradecimento
        alert(""+fone['telefone'].value+" obrigado!")
        
    return false;
}
