
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const contenedorParrafo = document.querySelector(".contenedor-parrafo");
const divBoton = document.querySelector(".div-boton");

// Función para validar que el texto solo contenga caracteres permitidos
function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function btnEncripar(){
    const texto = textArea.value;
    if (!validarTexto(texto)) {
        alert('No se permiten caracteres especiales, letras mayúsculas ni acentos');
        return;
    }

    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    ocultarContenedorParrafo(); // Oculta el contenedor al desencriptar
    visualizarBotonCopiar(); // visualiza el div del boton copiar
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
return stringEncriptado
}

function btnDesencripar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    visualizarBotonCopiar(); // visualiza el div del boton copiar
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }

    }
return stringDesencriptado
}

function btnCopiar(){
    const textoCopiado = mensaje.value;
    navigator.clipboard.writeText(textoCopiado);
    mensaje.value = "";
}

function ocultarContenedorParrafo() {
    contenedorParrafo.style.visibility = 'hidden';
}

function visualizarBotonCopiar(){
    divBoton.style.visibility = 'visible'; // Cambia la visibilidad del boton copiar a visible

}
