// showAlert = () => alert ('Esta es una alerta de JS');
const boton = document.getElementById('btnAction');
boton.addEventListener('click', function(){
    alert('haz hecho click en el bton');
}) 

const formulario = document.getElementById('my_form');

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    validateForm();


})

function validateForm(){
    const input = document.getElementById('email')
    const valor =  input.value
    if (validateEmail (valor)){
        alert ('El email se envio correctamente')
    }else{
        alert('Ingrese un email correcto' )
    }
}

function validateEmail(mail){
    const rest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
    return rest.test(mail);
}