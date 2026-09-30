const prompt = require("prompt-sync")();
let resultado;
let activo=true;
let numero1;
let operador;
let numero2;
let opc;

do{
    numero1 = Number(prompt("¿Cual es tu primero numero?"));
    operador = prompt("¿Cual es el operador?");
    numero2 = Number(prompt("¿Cual es tu segundo numero?"));
if(operador == "+"){

    resultado = numero1 + numero2;
    
}else if(operador == "-"){

     resultado = numero1 - numero2;

}else if(operador == "*"){

     resultado = numero1 * numero2;

 }else if(operador == "/"){

    resultado = numero1 / numero2;

}else{
    console.log("Operacion invalida");
}
console.log(resultado);
    opc = prompt("¿Deseas realizar otra operación? S/N");
if(opc == "s"){
    console.log("Digita");
}else if(opc == "n"){
    activo = false;
    console.log("Muchas gracias, Adios");
}else{
    console.log("Digita un valor valido S/N");
    opc = prompt("¿Deseas realizar otra operación? S/N");
}
}while(activo)

