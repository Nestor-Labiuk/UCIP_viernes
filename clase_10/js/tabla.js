let btn_cargar = document.getElementById('btn_cargar');
let tbody = document.querySelector("#tabla>tbody");
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let dni = document.getElementById('dni');
let frm_datos = document.getElementById('frm_datos');



btn_cargar.addEventListener('click', (e)=>{
    e.preventDefault();
    let n = nombre.value.trim();
    let a = apellido.value.trim();
    let d = dni.value.trim();

    if(a&&n&&d){
    
    let tr = document.createElement('tr');
        
    tr.innerHTML = `
        <td>${n}</td>
        <td>${a}</td>
        <td>${d}</td>    
        <td><i class="fas fa-trash-alt" onclick="this.parentNode.parentNode.remove()"></i></td>
        <td><i class="fas fa-pencil-alt"></i></td>
    `
    tbody.appendChild(tr);
    frm_datos.reset();
    }else{
        alert('Todos los datos son requeridos');
    }



})