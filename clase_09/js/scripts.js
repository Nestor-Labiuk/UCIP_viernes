/* 
Tema:

*/
let listaPersonas = document.getElementById('listaPersonas');
let ficha = document.getElementById('fichaEmpleado');


let arr = [
    {nombre: "Pedro",apellido: "Rossi", edad: 30},
    {nombre: "Maria",apellido: "Antonieta", edad: 30},
    {nombre: "Juan",apellido: "Blanco", edad: 40},
    {nombre: "Juan",apellido: "Blanco", edad: 40}

];

// let personas = "";
let personas = "<table class='table'>";

arr.forEach((e,i) => {
    personas += `
    <tr onclick="creaFicha(${i})">
    <td>${i}</td>
    <td>${e.nombre}</td>
    <td>${e.apellido}</td>
    <td>${e.edad}</td>
    </tr>
    `;
    
});

personas += "</table>";


listaPersonas.innerHTML = personas;

// let empleado = {
//     nombre: "Carlos",
//     apellido: "Pérez",
//     dni: "25.236.236",
//     antiguo: 20,
//     saluda: function() {
//         return `Hola soy ${this.nombre} ${this.apellido}`
//     }
// }

// let fichaEmpleado = `
// <h2>Nombre: ${empleado.nombre} ${empleado.apellido}</h2>
// <h3>DNI: ${empleado.dni}</h3>
// <h3>${empleado.saluda()}</h3>
// `;

// ficha.innerHTML = fichaEmpleado;


function creaFicha(i){
let fichaEmpleado = `
<h2>Nombre:${arr[i].nombre}</h2>
<h2>Apellido: ${arr[i].apellido}</h2>
<h3>Edad: ${arr[i].edad}</h3>

`;

ficha.innerHTML = fichaEmpleado;
}