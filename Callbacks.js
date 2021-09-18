function andar(){
    return "Andando";
}
function parar(){
    return "Parado";
}
function acaoCarro(resposta){
    return "O carro está: " + resposta();
};

console.log(acaoCarro(parar))