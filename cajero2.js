const prompt = require("prompt-sync")();

function pedirNumero(mensaje) {
    return Number(prompt(mensaje));
}

function calcular(numero1, operador, numero2) {
    if (operador === "+") {
        return numero1 + numero2;
    } else if (operador === "-") {
        return numero1 - numero2;
    } else if (operador === "*") {
        return numero1 * numero2;
    } else if (operador === "/") {
        if (numero2 === 0) {
            return "No se puede dividir entre 0";
        }
        return numero1 / numero2;
    } else {
        return "Operación no válida";
    }
}

function mostrarResultado(resultado) {
    console.log(`Resultado: ${resultado}`);
}

function atenderOperacion() {
    let numero1 = pedirNumero("¿Cuál es tu primer número? ");
    let operador = prompt("¿Cuál es el operador? ");
    let numero2 = pedirNumero("¿Cuál es tu segundo número? ");

    let resultado = calcular(numero1, operador, numero2);

    mostrarResultado(resultado);
}

let activo = true;

do {
    atenderOperacion();

    let opc;

    do {
        opc = prompt("¿Deseas realizar otra operación? (S/N): ").toLowerCase();

        if (opc !== "s" && opc !== "n") {
            console.log("Digita un valor válido: S/N");
        }

    } while (opc !== "s" && opc !== "n");

    if (opc === "n") {
        activo = false;
        console.log("Muchas gracias. ¡Adiós!");
    }

} while (activo);
