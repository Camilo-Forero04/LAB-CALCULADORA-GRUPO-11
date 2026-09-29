const prompt = require("prompt-sync")();
let resultado;
let activo=true;
let numero1 = Number(prompt("¿Cual es tu primero numero?"));
let operador = prompt("¿Cual es el operador?");
let numero2 = Number(prompt("¿Cual es tu segundo numero?"));

do{
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
}while(activo)

