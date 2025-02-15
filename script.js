const productos = [
{id:1, nombre: 'Fanta', precio: 2450},
{id:2, nombre: 'Coca Cola', precio: 2600},
{id:3, nombre: 'Sprite', precio: 2400},
{id:4, nombre: 'Quilmes 1lts', precio:2500}
];

let carrito = []

const productosList = document.getElementById('listaProductos')
productos.forEach(producto =>{

const li = document.createElement('li')
li.innerHTML = `${producto.nombre} -$ ${producto.precio} 
                <button onclick="agregarAlCarrito(${producto.id})">Agregar</button>`
productosList.appendChild(li);

})

function agregarAlCarrito(idProducto){

    const producto = productos.find(item => item.id === idProducto)

    const itemEnCarrito = carrito.find(item => item.id === producto.id);

    if(itemEnCarrito){

        itemEnCarrito.cantidad += 1;

    }else{
        carrito.push({...producto, cantidad: 1})
    }

    actualizarCarrito();

}


function quitarDelCarrito(idProducto){

const itemEnCarrito = carrito.find(item => item.id === idProducto);

if(itemEnCarrito){
    if(itemEnCarrito.cantidad > 1){
        itemEnCarrito.cantidad -= 1;
    }else{
        carrito = carrito.filter(item => item.id !== idProducto)
    }
    
}

actualizarCarrito();

}

function actualizarCarrito (){

const carritoHtml = document.getElementById('carrito');

carritoHtml.innerHTML = '';

let total = 0;

carrito.forEach(item =>{

    const li = document.createElement('li')
    li.innerHTML = `${item.nombre} (x${item.cantidad}) - $${item.precio * item.cantidad}
                    <button onclick = "quitarDelCarrito(${item.id})">Quitar</button>`;

    carritoHtml.appendChild(li);

total += item.precio*item.cantidad;

})

document.getElementById('total').innerHTML = `Total $${total}`;


}