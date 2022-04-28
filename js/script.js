function encriptar(msg) {
    let rp = msg.replaceAll("e","1").replaceAll("i","2").replaceAll("a","3").replaceAll("o","4").replaceAll("u","5");
    let rp2 = rp.replaceAll("1","enter").replaceAll("2","imes").replaceAll("3","ai").replaceAll("4","ober").replaceAll("5","ufat");
    return rp2;
}

function desencriptar(msg) {
    let b = msg.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat","u");
    return b;
}

function encriptarMensaje() {
   
    let miMensaje = document.getElementById("texto_encriptar").value;
    let mensajeEncriptado = encriptar(miMensaje);
    document.getElementById("texto_encriptado").value = mensajeEncriptado;
    let textarea = document.getElementById('texto_encriptar');
    
    alert("Mensaje encriptado!");

    textarea.value = '';

    elementosCambiar();
}

function elementosCambiar(){

    let noEncontrado = document.getElementById("ocultar");
    let mensajeFinal = document.getElementById("texto_encriptado");
    let botonCopiar = document.getElementById("copy");
    let input = document.getElementById ("texto_encriptar");
    noEncontrado.style.display = "none";
    mensajeFinal.style.display = "block";
    botonCopiar.style.display = "block";
    input.placeholder = "Inserte texto a desencriptar";

}


function desencriptarMensaje() {
    let miMensaje = document.getElementById("texto_encriptar").value;
    let mensajeEncriptado = desencriptar(miMensaje);
    let input = document.getElementById ("texto_encriptar");
    document.getElementById("texto_encriptado").value = mensajeEncriptado;    
    let textarea = document.getElementById('texto_encriptar');

    alert("Mensaje Desencriptado!");

    
    textarea.value = '';
    
    elementosCambiar();
    
    input.placeholder = "Inserte texto a encriptar";
}

function copiarMensaje() {
    let miMensaje = document.getElementById("texto_encriptado");
    miMensaje.select();
    miMensaje.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(miMensaje.value);
    miMensaje.select();

    let noEncontrado = document.getElementById("ocultar");
    let mensajeFinal = document.getElementById("texto_encriptado");
    noEncontrado.style.display = "block";
    mensajeFinal.style.display = "none";
}

