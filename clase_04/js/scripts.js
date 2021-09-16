// alert('HOLA');

var nombre = "Maria";
let a = 1;
let b = 3;

const btn1 = document.getElementById('btn1');
var resp = document.getElementById('respuesta');
btn1.addEventListener('click', function(){
    //alert('ok');
    resp.innerHTML = "HOLA " + nombre;
    sumar(a,b);
});



// alert(a+b);

let c = 10;
let d = 8;
let e = c + d;

let f = c*d;

let xx = "ciao";
function sumar(x,y){
    console.log(x+y);
    
}

console.log(xx);

//sumar(5,6);



