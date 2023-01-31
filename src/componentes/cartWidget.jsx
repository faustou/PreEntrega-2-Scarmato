import Cart from "../assets/img/carrito-de-compras.png"

export default function CartWidget(){
    return(
        <div className="cart">
            <img  src={Cart} alt="Carrito"></img>
            <span>4</span>
        </div>

    );
}