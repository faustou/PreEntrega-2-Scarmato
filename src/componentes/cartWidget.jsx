import Cart from "../assets/img/carrito-de-compras.png"
import { useCartContext } from "../context/CartContext";

export default function CartWidget(){
    const {totalAmount} = useCartContext()
    return(
        <div className="cart">
            <img  src={Cart} alt="Carrito"></img>
            <span> {totalAmount()} </span>
        </div>

    );
}