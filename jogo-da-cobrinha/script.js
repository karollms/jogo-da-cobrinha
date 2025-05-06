/*comentários com várias linhas em java script 

let nome_variavel_let = 15 //console.log dentro
var nome_variavel_var =  // console.log fora
const nome_variavel_const // const: variável fixa. Ex.: pi

// var
if (true){
    var x = 10
}
console.log(x)    // console.log é o "print" do python


//let
if (true){
    let y = 20;
    console.log(y)
}
console.log(y); */



let canvas = document.getElementById("snake");  //desenho
let contexto = canvas.getContext("2d");
let blocos = 32; 
let cobra = [];          // vetores podem guardar vários valores, diferente de uma variável

cobra[0] = {
    x: 8 * blocos, 
    y: 8 * blocos
}