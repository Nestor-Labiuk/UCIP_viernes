// el.style.cssText = "background-color: black; color: white;";
// el.style.border = "#000 solid 2px";
// el.classList.add("clase1", "clase2");
// el.classList.remove("clase");
// el.classList.toggle("clase");
// document.getElementById("estilo").href = "css/estilosjs.css";
let menu = document.getElementById('menu');
let mo = document.getElementById('mo');

let btn_menu = document.getElementById('btn_menu');
let dp_hamb = document.querySelector('#btn_menu>div');
btn_menu.addEventListener('click', function(){
    dp_hamb.classList.toggle("dp-cruz"); 
    menu.classList.toggle("correr-menu");   
});

let estado = "claro";
mo.addEventListener('click', function(){
    if(estado=="claro"){
        document.getElementById("estilos").href = "css/oscuro.css";
        mo.innerHTML = "MODO CLARO"; 
        estado = "oscuro";
    }else{
        document.getElementById("estilos").href = "css/styles.css";
        mo.innerHTML = "MODO OSCURO";
        estado = "claro";
    }
      
});