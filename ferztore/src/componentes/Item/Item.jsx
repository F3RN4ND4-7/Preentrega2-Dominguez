import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt= {nombre} />
        <h3>Nombre:{nombre} </h3>
        <p>Precio: {precio} </p>
        <p>ID: {id} </p>
        {/* <button>Ver detalles </button> */}
        <Link className="btn" to={`/item/${id}`} >Ver detalles</Link>
    </div>
  )
}

export default Item