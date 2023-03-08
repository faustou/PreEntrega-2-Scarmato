import React from 'react';
import { CloseSquareOutlined } from '@ant-design/icons';
import { useCartContext } from '../context/CartContext';
import NoProduct from './NoProduct';

const CartContainer = () => {
    const generarOrden = () => {
        const order = {}
        order.buyer = {name: 'Fausto', phone: '110239424', email: 'faustoscarmato@hotmail.com'}
        //order.precioTotal = precioTotal()
    }
    const { cartList, emptyCart, totalPrice, deleteItem } = useCartContext()

    return (
        <div>
            {
                cartList.length === 0 ? <NoProduct />
                :
                    <div>
                        {
                            cartList.map(prodCart => (
                                <p key={prodCart.id}>
                                    <img src={prodCart.img} className='w-25' />
                                    Nombre: {prodCart.name} -
                                    Cantidad: {prodCart.cantidad} Unidades. -
                                    Precio: ${prodCart.price*prodCart.cantidad}
                                    <CloseSquareFilled onClick={()=>deleteItem(prodCart.id)} style={{ fontSize: '35px', color: '#000', marginLeft: '1rem' }}  />
                                </p>
                            ))
                        }
                        <h2>Precio total: ${totalPrice()} </h2>
                        <button onClick={emptyCart}>
                            Vaciar el carrito
                        </button>
                    </div>
            }
        </div>
    );
};

export default CartContainer;