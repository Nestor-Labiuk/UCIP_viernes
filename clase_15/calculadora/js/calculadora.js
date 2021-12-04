let val_previs = "";
let previs = document.getElementById('previs');

let igual = document.querySelector('#igual');
let resultado = document.querySelector('#resultado');
let limpia = document.querySelector('#limpia');
let crlz = document.querySelector('#crlz');

let teclado = document.querySelector('#teclado');


teclado.addEventListener('click', (ee)=>{
    if(ee.target.dataset.va){
        var t = ee.target.dataset.va;
        val_previs += t.toString();
        previs.innerHTML = val_previs;
    }
    
})

igual.addEventListener('click', ()=>{
    let a = val_previs.replace(/x/g, "*");
    let r = eval(a);
    let rr;
    if(r % 1 == 0){
        rr = r;
    }else{
        rr = r.toFixed(2);
    }
    val_previs = r.toString();
    previs.innerHTML = rr;
    resultado.innerHTML = rr;    
});
limpia.addEventListener('click', ()=>{
    val_previs = "";
    previs.innerHTML = ""; 
    resultado.innerHTML = 0;   
});
crlz.addEventListener('click', ()=>{
    if(val_previs != ""){
        let vp = val_previs.slice(0, -1);
        val_previs = vp;
        previs.innerHTML = val_previs; 
        resultado.innerHTML = 0;   
    }
});