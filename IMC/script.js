function imc(){
    var est = document.getElementById('estatura').value;
    var peso = document.getElementById('Peso').value;
    var limpiar = document.getElementById('Limpiar');
    var etiqueta = document.getElementById("resultado");
    var res = 0;
    if (est != "" && peso != ""){
        limpiar.removeAttribute('disabled')
        res = peso / (est * est);
        etiqueta.append("Tu IMC es de: " + res)
    }
}

function limpiar(){
    var est = document.getElementById('estatura');
    var peso = document.getElementById('Peso');
    var etiqueta = document.getElementById('resultado');

    est.value = "";
    peso.value = "";
    etiqueta.innerText = "";
}