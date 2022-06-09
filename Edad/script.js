const fecha = document.getElementById("fecha");
const edad = document.getElementById("edad");

const calcularEdad = (fecha) => {
    const fechaActual = new Date();
    const anoActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth())+1;
    const diaActual = parseInt(fechaActual.getDate());
    
    const anoNacimiento = parseInt(String(fecha).substring(0,4));
    const mesNacimiento = parseInt(String(fecha).substring(5,7));
    const diaNacimiento = parseInt(String(fecha).substring(8,10));

    let edad = anoActual - anoNacimiento;
    if(mesActual < mesNacimiento) {
        edad--;
    }
    else if(mesActual == mesNacimiento){
        if (diaActual<diaNacimiento){
            edad--;
        }
    }
    return edad;
}

window.addEventListener('load', function(){
    fecha.addEventListener('change', function(){
        if(this.value){
            edad.innerText = `La edad es de ${calcularEdad(this.value)} años`;
            if(calcularEdad(this.value)<18){
                alert("Es menor de edad");
            }
        }
    });
});