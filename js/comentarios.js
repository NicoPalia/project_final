class Cliente {
    constructor(nombre, apellido, email, comentario) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.comentario = comentario;
    }
}
// Definicion de variables
let clientes;
let divRegistro = document.getElementById("divComentario");
let formCliente = document.getElementById('formCliente')
let divClientes = document.getElementById('divClientes')
let parrafoError = document.getElementById('parrafoError')


// Muestro el registro
document.getElementById('botonComentario').addEventListener('click', () => {
    divRegistro.classList.toggle("hide");
})



clientes = []



//Obtengo informacion del formulario
formCliente.addEventListener('submit', (e) => {

  e.preventDefault();

    let nombreCliente = document.getElementById("nombre").value
    let apellidoCliente = document.getElementById("apellido").value
    let emailCliente = document.getElementById("email").value
    let comentarioCliente = document.getElementById("comentario").value

    let objetoCliente = new Cliente(nombreCliente, apellidoCliente, emailCliente, comentarioCliente)

    clientes.push(objetoCliente)

    localStorage.setItem('clientes', JSON.stringify(clientes))
    formCliente.reset()
})

//Muestro informacion del storage a traves de un boton
document.getElementById('botonClientes').addEventListener('click', () => {
    let clientesStorage = JSON.parse(localStorage.getItem('clientes'))
        divClientes.innerHTML = "";
        clientesStorage.forEach((clienteArray, indice) => {
            divClientes.innerHTML += `
                <div class="card" id="cliente${indice}" style="width: 18rem;margin: 6px">
                    <div class="card-body">
                        <h5 class="card-title">${clienteArray.nombre} ${clienteArray.apellido}</h5>
                        <p class="card-text">${clienteArray.email}</p>
                        <p class="card-text">"${clienteArray.comentario}"</p>
                    </div>
                </div>
            `
        })

})
