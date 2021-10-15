/* 
Tema:

*/


//miFunc('hola');

// miFunc(3,5);

// function miFunc(a,b){
//     alert(a+b);
// }

let personas = {
    nombre: "Juan",
    edad: 22
}
let nom = personas.nombre;

let app = document.getElementById('app');
let btn1 = document.getElementById('btn1');

let val1 = app.dataset.var1;
let val2 = app.dataset.var2;

// function sumaVals(){        
//     let suma = parseInt(val1) + parseInt(val2);    
//     app.innerHTML = "<h1>" + suma + "</h1>";
// }


// btn1.addEventListener('click',sumaVals);

// btn1.addEventListener('click', function(){
//     let suma = parseInt(val1) + parseInt(val2);    
//     app.innerHTML = "<h1>" + suma + "</h1>";
// });

btn1.addEventListener('click', function(){
    let suma = parseInt(val1) + parseInt(val2);    
    document.getElementById('bb').innerHTML = `
    <h1 style="color: #f00">${suma}</h1>
    <h2>Esta es la suma de ${val1}  y ${val2}</h2>  
    
    ` ;
});









// let idApp = app.id;

