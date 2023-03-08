import { useState } from "react"
import { useCartContext } from "../context/CartContext"
import AfterBuy from "./afterBuy"

const ItemDetailCount = ({ initial= 1, stock=10, onAdd, item={item}}) => {
    
    const [finisProcess, setFinisProcess] = useState(true)
    const [count, setCount] = useState(initial)
    const { addCart, cartList } = useCartContext()

    function onAdd(cantidad) {
        console.log(cantidad)
        addCart({...item, cantidad })
        console.log('cart List:',cartList)
        setFinisProcess(false)
    }

    const sumar = ()=> {
        if (count<stock){
            setCount(count+1)
        }
    }
    const restar = ()=> {
        if (count > initial) {
            setCount(count-1)
        }
    }

    return (
        <div className="card mt-5" >
            <div className="card-body row">
                <div className="col">
                <button className="btn btn-outline-dark w-100" onClick={sumar}> + </button>

                </div>
                <div className="col">
                <center>
                <label>{count}</label>

                </center> 
    
                </div>
                <div className="col">
                <button className="btn btn-outline-dark w-100" onClick={restar}> - </button>

                </div>
            </div>
            {
                finisProcess ?
                    <div className="card-footer">
                        <button className="btn-5" onClick={()=>onAdd(count)}><span> AGREGAR AL CARRITO </span></button>
                    </div>

                :
                <AfterBuy />

            }


        </div>
    )
}

export default ItemDetailCount
