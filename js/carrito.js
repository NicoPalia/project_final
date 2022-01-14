$("#carritoNumero").click(function(){

    carrito.forEach( item => {
       $(".listaCarrito").append(`
          <p>${item.nombre}</p>
          <p>${item.precio}</p>
       `)
      })  
   })     

