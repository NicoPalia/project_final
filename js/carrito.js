function recuperar() {
   let recuperar = JSON.parse(localStorage.getItem('carrito'))
   if(recuperar){ 
      recuperar.forEach(el => {
         carritoDeCompras.push(el)
     
      })
      
   }

 }

 recuperar()


$("#carritoNumero").click(function(){
  
   document.querySelector(".listaCarrito").innerHTML = ""

    carrito.forEach( item => {
       $(".listaCarrito").append(`
          <p>${item.nombre}</p>
          <p>${item.precio}</p>
       `)
      })
   })    
   