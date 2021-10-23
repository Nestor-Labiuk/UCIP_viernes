// el.style.cssText = "background-color: black; color: white;";
// el.style.border = "#000 solid 2px";
// el.classList.add("clase1", "clase2");
// el.classList.remove("clase");
// el.classList.toggle("clase");
// document.getElementById("estilo").href = "css/estilosjs.css";



let app = document.getElementById('app');

let btn1 = document.getElementById('btn1');
btn1.addEventListener('click', ()=>{
    let h1 = document.createElement('h1');
    h1.style.cssText = "color: #f00;"
    h1.innerHTML = "Hola Mundo";    
    app.appendChild(h1);
})

// let btn1 = document.getElementById('btn1');
// btn1.addEventListener('click', ()=>{
//     let innerActual = app.innerHTML
//     let valorNuevo = innerActual + "<h1>Hola Mundo</h1>";
//     app.innerHTML = valorNuevo;
// })
