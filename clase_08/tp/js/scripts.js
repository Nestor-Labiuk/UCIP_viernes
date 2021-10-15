let val1 = document.getElementById('val1');
let val2 = document.getElementById('val2');
let btn_sumar = document.getElementById('btn_sumar');
let resultado = document.getElementById('resultado');
let frm1 = document.getElementById('frm1');

btn_sumar.addEventListener('click', (e)=>{
    e.preventDefault();
    let a = val1.value;
    let b = val2.value;
    if(!isNaN(a) && !isNaN(b)){
        let c = parseInt(a) + parseInt(b);
        resultado.innerHTML = c;
        frm1.reset();
    }else{
        alert('solo numeros o explota la app');
    }
    
    

    

    
})