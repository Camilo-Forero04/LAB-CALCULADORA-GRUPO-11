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
do { opc = prompt("¿Deseas realizar otra operación? (S/N): ").toLowerCase();
     if (opc !== "s" && opc !== "n") { 
        console.log("Digita un valor válido: S/N"); 
     } 
} while (opc !== "s" && opc !== "n"); if (opc === "n") { 
        activo = false;
        console.log("Muchas gracias. ¡Adiós!");
}
}while(activo)

