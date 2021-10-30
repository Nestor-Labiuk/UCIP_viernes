let app = document.getElementById('app');

// let app = document.querySelector('#app');
// let dd = document.querySelectorAll('#app>div');

// let el_cont = document.querySelectorAll('.container');

// let h1_todos = document.getElementsByTagName('h1');

// console.log(dd);

let btn_agregar = document.querySelector('#btn_agregar');
let btn_quitar = document.querySelector('#btn_quitar');

btn_agregar.addEventListener('click', ()=>{
    let divx = document.createElement('div');
    divx.innerHTML = "HOLA";
    app.appendChild(divx);
    
});

btn_quitar.addEventListener('click', ()=>{
    let aa = document.querySelector("#app>div:last-child");

    aa.remove();
});