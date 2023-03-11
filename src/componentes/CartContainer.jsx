import React from 'react';
import { CloseSquareFilled } from '@ant-design/icons';
import { useCartContext } from '../context/CartContext';
import NoProduct from './NoProduct';
import Form from './form.jsx';

const CartContainer = () => {
    const { cartList, emptyCart, totalPrice, deleteItem } = useCartContext()
    return (
        <div>
            {
                cartList.length === 0 ? <NoProduct />
                :
                    <div className='container'>
                        {
                            cartList.map(prodCart => (
                                <div key={prodCart.id} className='d-flex flex-row align-items-center'>
                                    <img src={prodCart.img} style= {{ width: '150px' }} />
                                    Nombre: {prodCart.title} -
                                    Cantidad: {prodCart.cantidad} Unidades. -
                                    Precio: ${prodCart.price*prodCart.cantidad}
                                    <CloseSquareFilled onClick={()=>deleteItem(prodCart.id)} style={{ fontSize: '35px', color: '#000', marginLeft: '1rem' }}  />
                                </div>
                            ))
                        }
                        <h2 className='text-end' >Precio total: ${totalPrice()} </h2>   
                        <button className='btn btn-primary mb-4' onClick={emptyCart}>
                             Vaciar el carrito
                        </button>
                    </div>
            }
            <Form />
        </div>
    );
};

export default CartContainer;