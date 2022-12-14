//ACCEDER AL DOM
// 1 - id - trae un objeto
let titulo = document.getElementById("titulo");
console.log(titulo);

// 2 - clase - va a traer un array de objetos
let parrafos = document.getElementsByClassName("parrafo");
console.log(parrafos);

// 3 - por etiqueta - trae un array
let subtitulo = document.getElementsByTagName("h2");
console.log(subtitulo);

for(const parrafo of parrafos) {
    console.log(parrafo.innerHTML)
}

// 4 - por selector
console.log(document.querySelector("#titulo"))
console.log(document.querySelector(".parrafo"))


// function nombreUtil( parametros-opcional )

// function mostrarNombre(){
//     let nombre = prompt("Cual es tu nombre?");
//     alert(`Tu nombre es ${nombre}`);
// }

// mostrarNombre();

function calcularDescuento(precio, porcentaje) {
let valorDescuento = precio * porcentaje /100;
let precioFinal = precio - valorDescuento;

return precioFinal;
}

// console.log(precioFinal); 

//---------------- Carga de productos usuarios internos ---------------------//


const listaProductos = [
    { id:1 ,nombre: "Pack  x 5- clases de yogas", categoria:"Yoga", precio: 1500}, 
    { id:2 ,nombre: "Clase de yoga individual", categoria:"Yoga", precio: 300},
    { id:3 ,nombre: "7 Meditaciones dinamicas con Gus",categoria:"Meditacion", precio: 4000},
    { id:4 ,nombre: "Reescribir la mente", categoria:"Biocodificacion", precio: 2000},
    { id:5 ,nombre: "Alineacion de Chackras - 12 dias", categoria:"Meditacion", precio: 3500},
];

class Producto {
    constructor(nombre, categoria, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio
    }
}
const guardarProducto = () => {
    let nombre = document.getElementById("nombre").value;
    let categoria = document.getElementById("categoria").value;
    let precio = parseFloat(document.getElementById("precio").value);

    let nuevoProd = new Producto(nombre, categoria, precio);
    listaProductos.push(nuevoProd);
}

console.log(listaProductos);

//FOREACH - 
listaProductos.forEach((producto)=> {
    console.log(`este producto es ${producto.nombre} y su precio es $${producto.precio}`)
});

listaProductos.forEach((producto) => {
let contenedorProd = document.createElement("div");
 contenedorProd.className = 'producto';
contenedorProd.innerHTML = `
    <h3 id='${producto.id}'>${producto.nombre}</h3>
    <p>${producto.categoria}</p>
    <p>$${producto.precio}</p>
 `;
document.querySelector("#productos").append(contenedorProd);
})

//---------------- Busqueda de productos en la web ---------------------//

//SOME 
let buscarPorPrecio = listaProductos.some(producto => producto.precio > 3000 < 1000);

console.log(buscarPorPrecio)

//Parametro obtenido de boton - igual a categoria 
function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
    //inicializados
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".producto.nombre");
 
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //mostrar elemento
        listaProductos[index].classList.remove("hide");
      } else {
        //esconder otros
        listaProductos[index].classList.add("hide");
      }
    });
  });
  
  
// -----------------Carrito de compras---------------------//
//MAP - crea otro array con alguna transformacion
let listaNueva = listaProductos.map(producto => producto.precio = producto.precio * 1.07);

console.log(listaNueva)

//REDUCE - resumir el array a un valor - acepta 2 parametros

const totalCarrito = listaProductos.reduce((acumulador, producto)=> {
   return acumulador + producto.precio;
}, 0);
console.log(`El total es  $${totalCarrito}`);