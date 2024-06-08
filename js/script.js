const listaPrestamos = "./db/data.json";
const contenedorPrestamos = document.getElementById("mostrarPrestamos");
fetch(listaPrestamos)
.then(respuesta=>respuesta.json())
.then((datos) =>{
    mostrarPrestamos(datos)
})
.catch((error)=>console.log(error));

function mostrarPrestamos(prestamos){
    prestamos.forEach(prestamo=>{
        const card = document.createElement("div");
        card.innerHTML = ` 
                            <div>
                            <h3> ${prestamo.nombre}</h3>
                            <h3> Moneda: ${prestamo.moneda}</h3>
                            <h3> Monto maximo: ${prestamo.montoMaximo}</h3>
                            <button id = 'boton${prestamo.id}'>Seleccionar Prestamo </button>
                            </div>
                         `
        contenedorPrestamos.appendChild(card);
        const boton = document.getElementById(`boton${prestamo.id}`);

        boton.addEventListener("click", ()=>{
        agregaralSimulador(prestamo.id, prestamos);
        })
    })
}

 const simulador = [];

 const agregaralSimulador = (id, prestamos) =>{
    const prestamo = prestamos.find((prestamo) => prestamo.id == id);
    if(simulador.length == 0){
        simulador.push(prestamo);
        Swal.fire({
            title: 'Prestamo agregado con exito',
            icon: 'success',
            confirmButtonText: 'Continuar'
          })
    }
    else {
        Swal.fire({
            title: 'Error, no se puede elegir mas de un prestamo',
            text: 'Ud quiere continuar?',
            icon: 'error',
            confirmButtonText: 'Continuar'
          })
    }
    localStorage.setItem("id", JSON.stringify(simulador));
 }
