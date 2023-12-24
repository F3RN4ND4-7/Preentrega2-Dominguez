import React from 'react'

const Map = () => {
    const productos = [
        {id:1, nombre: "PcGamer", precio: 2407},
        {id:2, nombre: "Audifonos", precio: 1899},
        {id:3, nombre: "Iphone", precio: 12700},
        {id:4, nombre: "Laptop", precio: 22900},
    ]


  return (
    <div>
        <h2>Productos Ferztore</h2>
        <ul>
            {
                productos.map(producto => (
                    <li key={producto.id}>
                        <span>{producto.nombre} </span>
                        <span>{producto.precio} </span>
                    </li>
                ))
            }
        </ul>
    </div> 
  )
}

export default Map