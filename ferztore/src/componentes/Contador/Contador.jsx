import React, { useState, useEffect } from 'react'

const Contador = () => {
    const [contador, setContador] =  useState(1);

    useEffect(() =>{
        document.title = `Contador: ${contador} `;

        if (contador > 5 ) {
            setColor("red")
        }else {
            setColor ("black")
        }

    }), [contador]

    const sumarContador = () => {
        setContador(contador + 1);
    }
    const restarContador = () => {
        setContador(contador - 1);
    }

  return (
    <div>
    <button onClick={restarContador}> - </button>
    <p>{contador}</p>
    <button onClick={sumarContador}> + </button>

    <button id='boton' style={{color: color}}> Agregar al carrito </button>
    </div>
  )
}

export default Contador