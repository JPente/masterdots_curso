/*JS parala comprobvacion de datos de entrada*/

//inicializacion de var, objetos,DOM
const nickInput = document.getElementById("nick");
const tamanoInput = document.getElementById("tamano");
const formEntrada = document.getElementById("formentrada");
const errorp = document.getElementById("error");

//funciones de evento
function comprovarForm(event){
    
    if(nickInput.value.length < 1){
        console.log("No hay nick!");
        nickInput.focus();
        errorp.innerText = "¡Debes introducir un nick!";
        event.preventDefault();
        return false;
    }
    else if (tamanoInput.value == "0"){
        console.log("No has seleccionado un tamaño!");
        tamanoInput.focus();
        errorp.innerText - "¡Debes seleccionar un tamaño de tablero!";
        event.preventDefault();
        return false;
    }
    return true;
}

//inicio de carga de eventos
formEntrada.addEventListener("submit",comprovarForm);
