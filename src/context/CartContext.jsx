import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
}
    
export const CartContextProvider = ({children})=> {
    const [cartList, setCartList] = useState([])
    const addCart = ( item ) => {
        //condition to accumulate items
        const sameProduct = cartList.findIndex(product => product.id === item.id)
        if(sameProduct!==-1){
            cartList[sameProduct].cantidad += item.cantidad
            setCartList([...cartList])
            return
        }
        setCartList([
            ...cartList,
            item
        ])
        console.log('cart List:',cartList)
        setPrueba(true)
    }
    const totalAmount = () => cartList.reduce( (count, product) => count += product.cantidad, 0)
    const totalPrice = () => cartList.reduce( (count, item) => count += (item.cantidad*item.price), 0)
    const emptyCart = () => {
        setCartList([])
    }

    const deleteItem = (id) => setCartList(cartList.filter(prod => prod.id !== id))

    const [prueba, setPrueba] = useState(false);
    return (

        <CartContext.Provider value={{
            cartList,
            prueba,
            addCart,
            deleteItem,
            emptyCart,
            totalAmount,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
 }
