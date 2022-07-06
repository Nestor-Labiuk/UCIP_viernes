let caja1 = document.querySelector('#caja1');
let caja2 = document.querySelector('#caja2');
let caja3 = document.querySelector('#caja3');


// caja1.addEventListener('click', (e)=>{
//     alert('Soy caja1');
// });

// caja2.addEventListener('click', (e)=>{
//     e.stopPropagation();
//     alert('Soy caja2');
// });
// caja3.addEventListener('click', (e)=>{
//     e.stopPropagation();
//     alert('Soy caja3');
// });


caja1.addEventListener('click', (e) => {
    let id = e.target.id;
    let t = e.target.dataset.val;
    if (id != "caja1") {
        alert(`Hola soy ${t}`);
    } else alert(`Hola soy ${t}`);

});

// if(a===b){

// }else{

// }
