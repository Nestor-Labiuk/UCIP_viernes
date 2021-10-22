let listaUsuarios = document.getElementById('listaUsuarios');
let ficha = document.getElementById('fichaUsuario');


// fetch('elementos/boton.html')
// .then((res)=>{
//     return res.text();
// })
// .then((el)=>{
//     listaUsuarios.innerHTML = el;
// })
// .catch((err)=>{
//     console.log(err.message)
// });

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res=>res.json())
// .then(el=>{
//     console.log(el);
// })
// .catch(err=>{
//     console.log(err.message)
// });

fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    return res.json();
})
.then((usuarios)=>{
    creaListaUsuarios(usuarios);
})
.catch((err)=>{
    console.log(err.message)
});




function creaListaUsuarios(us){
let usuarios = "<table class='table'>";

us.forEach((e,i) => {
    usuarios += `
    <tr onclick="creaFicha(${e.id})">
    <td>${e.id}</td>
    <td>${e.name}</td>
    <td>${e.email}</td>
    <td onclick="event.stopPropagation();verTelefono('${e.phone}')"><i class="fas fa-phone-volume"></i></td>
    </tr>
    `;    
});
usuarios += "</table>";
listaUsuarios.innerHTML = usuarios;
}


function creaFicha(i){
fetch(`https://jsonplaceholder.typicode.com/users/${i}`)
.then((res)=>{
    return res.json();
})
.then((usuario)=>{
    let fichaU = `
    <h1>Nombre: ${usuario.name}</h1>
    <h3>Usuario: ${usuario.username}</h3>
    <h3>Email: ${usuario.email}</h3>
    <h3>Ciudad: ${usuario.address.city}</h3>
    <h3>Empresa: ${usuario.company.name}</h3>
  
    `
    ficha.innerHTML = fichaU;
})
.catch((err)=>{
    console.log(err.message)
});
}

function verTelefono(t){
    ficha.innerHTML = "";
    alert(t);
}
