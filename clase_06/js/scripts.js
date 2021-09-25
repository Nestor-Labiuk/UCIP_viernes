let a = null;

// console.log(typeof a);

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

let arr = [1,3,5,"abc"];

let usuarios = ["Juan", "Pedro", "Pablo"];

let ciudades = [
    ["Mar del Plata", 300000],
    ["Necochea", 100000],
    ["Miramar", 50000]
];

console.log(dias.length);



function sumar(a,b){
    let c = a + b;
    return c;
}

//let x = sumar(3,15);

let usuario = {
    nombre: 'Pedro',
    apellido: 'Rossi',
    edad: 48,
    saluda: function(){
        alert('Hola soy Pedro');
    }

}

// window.alert(usuario.edad);


// usuario.saluda();

console.log(typeof dias);