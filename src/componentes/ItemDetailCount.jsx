import { Link } from "react-router-dom"

/* CONTADOR DEL PROFE PARA PROBAR */
const ItemDetailCount = ({ initial= 1, stock=10, onAdd}) => {
    console.log(initial)
    return (
        <div className="card mt-5" >
            <div className="card-body row">
                <div className="col">
                <button className="btn btn-outline-dark w-100" onClick={()=>{}}> + </button>

                </div>
                <div className="col">
                <center>
                <label>{initial}</label>

                </center> 
    
                </div>
                <div className="col">
                <button className="btn btn-outline-dark w-100" onClick={()=>{} }> - </button>

                </div>
            </div>
            <div className="card-footer">
                <Link to='/cart' ><button class="btn-5" onClick={()=>{}}><span> AGREGAR AL CARRITO </span></button></Link>
            </div>


        </div>
    )
}

export default ItemDetailCount
