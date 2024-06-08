const prestamos = JSON.parse(localStorage.getItem("id"));
console.log(prestamos);
let datos = document.getElementById("visualizarPrestamos");
prestamos.forEach(prestamo=>{
    let listaPrestamos = document.createElement("div");
    listaPrestamos.innerHTML = `<ul> <li> id: ${prestamo.id}, ${prestamo.nombre}, moneda: ${prestamo.moneda}, monto maximo: ${prestamo.montoMaximo} </li> </ul>`;
    datos.appendChild(listaPrestamos);
})

class Persona{
    constructor(cedula, nombre, correo){
        this.cedula = cedula;
        this.nombre = nombre;
        this.correo = correo;
    }
}

function guardarFormularioClientes(){
    const formulario = document.getElementById("datosClientes");
    const datosClientes = {
        cedula: formulario.cedula.value,
        nombre: formulario.nombre.value,
        correo: formulario.correo.value
    }
    const datosClientesJson = JSON.stringify(datosClientes);
    const persona = new Persona(datosClientes.cedula, datosClientes.nombre, datosClientes.correo);
    localStorage.setItem("cliente", datosClientesJson);
    Swal.fire({
        title: "Solicitud enviada con exito!",
        icon: "success"
      }); //No entiendo por que no funciona el sweetalert aca, en el index si funciona, por eso puse una alerta comun.
      alert("Solicitud enviada con exito");
    }
let botonEnviarCliente = document.getElementById("botonEnviarCliente");
botonEnviarCliente.addEventListener("click", guardarFormularioClientes);