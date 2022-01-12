

let datos = []; // ARRAY DE cajas DESDE stock.json
let cajas = []; // cajas CON ATRIBUTOS Y FUNCIONES PARA USARLO EN main.js
let carrito = []; // ARRAY con los productos anyadidos al carrito

// GET stock.json
let url = "./data/cajas.json"
$.getJSON(url, function(response, state){
    if(state == "success"){
        datos = response;

        // GUARDAR "datos" EN EL ARRAY "cajas" CON SUS ATRIBUTOS Y FUNCIONES DEL CONTRUCTOR "caja"
        for(let item of datos){
            cajas.push(new caja(item.id, item.nombre, item.precio, item.imagen));
        }

        //GUARDAR ARRAY cajas EN EL LOCAL STORAGE
        let cajasJSON = JSON.stringify(cajas);
        localStorage.setItem("data", cajasJSON);

        // AGREGAR cajas AL DOCUMENT
        let cajasDOM = document.querySelector("#cajasDOM");

        for(let el of datos){
            let divCaja = document.createElement("div");
            divCaja.classList.add("caja");
            divCaja.innerHTML = `
            <div class="grid-item" style="color: white; padding-bottom: 60px;">
                <h2>${el.nombre}</h2>
                <img src="${el.imagen}" alt="${el.nombre} style="width=300px">
                <p class="price">$ARS ${el.precio}</p>
                <p> Caja fuerte de acero. Maxima seguridad</p>
                <button class="btn btn-light" id="agregarcaja${el.id}" onclick="agregarCaja(${el.id})">Agregar</button>
            </div>`;
            cajasDOM.appendChild(divCaja);
        };
    }
});

function agregarCaja(id){
  carrito.push(cajas[id]);
  $("#numero-productos")[0].innerHTML = carrito.length;
}

//FUNCION PARA CONSTRUIR CADA caja DENTRO DEL ARRAY "cajas"
function caja(id, nombre, precio, imagen){

    this.id = parseInt(id);
    this.nombre = nombre;
    this.precio = parseInt(precio);
    this.imagen = imagen;

    // Agregar item al carrito y al Local Storage
    this.agregarCarrito = function(){
        carrito.push(new caja(this. id, this.nombre, this.precio));

        //Actualizar en el Local Storage
        carritoJSON = JSON.stringify(carrito);
        localStorage.setItem("carrito", carritoJSON);

        // Numero de items en el icono del carrito
        actualizarNumeroCarrito();
    }
}
