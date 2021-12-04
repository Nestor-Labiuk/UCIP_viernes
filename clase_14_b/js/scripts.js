

class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;        
    }
    saluda(){
        return "Hola soy " + this.nombre;
    }
}

class Estudiante extends Persona{
    constructor(nombre, apellido, edad,cohorte){
        super(nombre, apellido, edad);
        this.cohorte = cohorte;
        
    }
      
    static alertx(a){
        alert(a);
    }
}

let persona1 = new Persona("Maria", "Lopez", 34);
let persona2 = new Persona("Pedro", "Lopez", 34);

let estudiante1 = new Estudiante("Pedro", "Lopez", 34, 2021);

//alert(estudiante1.cohorte);
alert(estudiante1.saluda());

// Estudiante.alertx('HOLA');

// class UI{

//     static borrarTodo(){

//     }
// }

//UI.barrarTodo();