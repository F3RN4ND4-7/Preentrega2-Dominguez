import React, { useRef } from 'react'

const UseRef = () => {
const contadorCarrito = useRef(0);
const agregarAlCarrillo = () => {
    const contadorCarrito = useRef(0);
    const contadorAlCarrillo = () => {
        contadorCarrito.current= contadorCarrito.current + 1;
        console.log(contadorCarrito.current)
    }
}

  return (
    <div>
        <p>Productos en el carrito {contadorCarrito.current}  </p>
        <button onClick={agregarAlCarrillo}> Agregar produtos al carrito! </button>
    </div>
  )
}

export default UseRef