const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

function quitarAcento(stringAcento){
    let matrizAcentos = [["á","a"], ["é","e"], ["í","i"], ["ó","o"], ["ú","u"]];
    stringAcento = stringAcento.toLowerCase();

    for(let i = 0; i < matrizAcentos.length; i++){
        if(stringAcento.includes(matrizAcentos[i][0])){
            stringAcento = stringAcento.replaceAll(matrizAcentos[i][0], matrizAcentos[i][1]);
        }
    }
	
    return stringAcento;
}


function btnEncriptar(){
    const textoEncriptado = encriptar();
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    document.getElementById("pMensaje").style.visibility = "hidden";
    document.getElementById("copiar").style.visibility = "visible";
    inputTexto.value = "";
}

function encriptar(){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    let stringEncriptada = quitarAcento(inputTexto.value);

    for( let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){//lo que esta haciendo aquí es que cuando se cumple un ciclo el .includes verifica sin en la posicion 0 de la matrizCodigo si existe algunas de esas letra en el stringEncriptada.
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);//lo que hace el .replaceAll es que cuando encuentra una coincidencia lo remplaza en la misma posición i pero ahora en vez de la posición 0 de verificación ahora lo remplaza por el contenido de la posición 1.
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
    mensaje.style.backgroundImage = "none";
    document.getElementById("pMensaje").style.visibility = "hidden";
    document.getElementById("copiar").style.visibility = "visible";
    inputTexto.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for( let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){//lo que esta haciendo aquí es que cuando se cumple un ciclo el .includes verifica sin en la posicion 1 de la matrizCodigo si existe algunas de esas letra en el stringDesencriptada.
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);//lo que hace el .replaceAll es que cuando encuentra una coincidencia lo remplaza en la misma posición i pero ahora en vez de la posición 1 de verificación ahora lo remplaza por el contenido de la posición 0.
        }
    }
    return stringDesencriptada;
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    swal("HECHO", 'Texto copiado', 'success');//esto pasa con sweetAlert.js.org
}
