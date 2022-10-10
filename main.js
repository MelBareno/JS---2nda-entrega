// function nombreUtil( parametros-opcional ) { codigo }
let edad; //variable global
let anio;

function mostrarNombre(){
    let nombre = prompt("Cual es tu nombre?");
    alert(`Tu nombre es ${nombre}`);
    anio = 2022;
}

//mostrarNombre();

function aprobarNota() {
    let nota = parseInt(prompt("Cual fue tu nota?")); //variable local
    if (nota > 4) {
        alert("aprobaste");
    } else {
        alert("no aprobaste");
    }
}
alert(nota)
// aprobarNota()

function suma(num1, num2) {
    let sumas = num1 + num2; //console.log(6+9)
    let resultado;
    if (sumas > 20) {
        resultado = sumas + 3;
    } else {
        resultado = sumas - 3;
    }
    // return resultado;
}
function suma1(num1, num2) {
    let sumas = num1 + num2; //console.log(6+9)
    let resultado;
    if (sumas > 20) {
        resultado = sumas + 3;
    } else {
        resultado = sumas - 3;
    }
    return resultado;
}

// let numero1 = parseInt(prompt("que numero queres sumar"));

// suma(numero1, 9); //suma(6,9)
// suma(50, 3);
// let edad = parseInt(prompt("cual es tu edad"));
// suma(edad, numero1);

// let resultadoSuma = suma(4,12)
// let resultadoSuma1 = suma1(4,12);

// console.log(resultadoSuma1);
// console.log(resultadoSuma);


function calcularDescuento(precio, porcentaje) {
    let valorDescuento = precio * porcentaje /100;
    let precioFinal = precio - valorDescuento;

    return precioFinal;
}

// let valorProducto = calcularDescuento(1000, 20);
// console.log(valorProducto);

function productoNuevo(){
    let nombreProducto = prompt("Como se llama el producto?");
    let precioProducto = parseFloat(prompt("cuanto cuesta?"));
    let descuentoProducto = parseInt(prompt("cuanto despuesnto le das?"));

    let precioFinal = calcularDescuento(precioProducto, descuentoProducto);
    let producto = console.log(`El producto nuevo es ${nombreProducto} y su precio final es ${precioFinal}`);
    return producto;
}

//productoNuevo();

// Esriban una funcion que acepte un numero y les diga si es un numero primo o no
// un numero primo, es un numero que se divide solo por si mismo y por 1
// 1 - no es primo