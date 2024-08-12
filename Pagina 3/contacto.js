let form= document.getElementById("formulario");
let nombre= document.getElementById("nombre");
let apellido= document.getElementById("apellido");
let email= document.getElementById("email");
let telefono= document.getElementById("telefono")
let box= document.getElementById("box");
let boton= document.getElementById("boton");

let guardarInfo= [];

boton.addEventListener("click",(e)=>{
    e.preventDefault();
    
     if(!form.reportValidity()){
        alert("Error. Usted debe completar todos los campos con los formatos requeridos");
        return;
    }

    guardarInfo[0]=nombre.value;
    guardarInfo[1]=apellido.value;
    guardarInfo[2]=email.value;
    guardarInfo[3]=telefono.value;
    guardarInfo[4]= box.value;

    //console.log(`Su nombre es ${guardarInfo[0]}y su apellido es ${guardarInfo[1]}`);

    let blob= new Blob([guardarInfo],{type:"text/plain;charset=utf-8"});
    saveAs(blob,"contacto.txt");
})