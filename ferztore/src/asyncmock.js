const productos = [
    {id:1, nombre:"Mini", precio: 300, img: "./img/Mini.png"},
    {id:2, nombre:"Chico", precio: 500, img: "./img/Chico.png"},
    {id:3, nombre:"Mediano", precio: 700, img: "./img/Mediano.png"},
    {id:4, nombre:"Grande", precio: 1200, img: "./img/Grande.png"},
    {id:5, nombre:"X-grande", precio: 1300, img: "./img/X-grande.png"},
    {id:6, nombre:"Plus", precio: 1500, img: "./img/Plus.png"},
    {id:7, nombre:"Super", precio: 2200, img: "./img/Super.png"},
    {id:8, nombre:"Mega", precio: 2700, img: "./img/Mega.png"},
]

export const getProductos = () => {
    return new Promise ( resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 1000)
    }

    )
}