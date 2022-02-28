//aca se tomaran los valores de los botones que seleccionemos y lo trasladará a las funciones del archivo Display.js 

const ValorAnterior=document.getElementById('valor-anterior');
const ValorActual=document.getElementById('valor-actual');
const numeros=document.querySelectorAll(".numero");
const operando=document.querySelectorAll(".operador");

const display=new Display(ValorAnterior,ValorActual);

numeros.forEach(botonpulsado => {
    botonpulsado.addEventListener('click',() => display.agregarNumero(botonpulsado.innerHTML));
});


operando.forEach(botonpulsado => {
    botonpulsado.addEventListener('click',() => display.validarBoton(botonpulsado.value))
});