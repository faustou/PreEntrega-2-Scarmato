import React from 'react';
import './CartContainer.scss'
import { CloseSquareFilled } from '@ant-design/icons';
import { useCartContext } from '../context/CartContext';
import NoProduct from './NoProduct';
import Form from './form.jsx';

const CartContainer = () => {
    const { cartList, emptyCart, totalPrice, deleteItem, prueba } = useCartContext()
    return (
        <div>
            {
                prueba==true ?
                <div className='container item-cart-container'>
                {
                    cartList.map(prodCart => (
                        <div key={prodCart.id} className='d-flex flex-row align-items-center'>
                            <img src={prodCart.img} style= {{ width: '65px' }} />
                            <div>
                                <p className='item-title'>
                                    {prodCart.name}
                                </p>
                            </div>
                            <div>
                                <p className='item-un'>
                                    {prodCart.cantidad}ud.
                                </p>
                            </div>
                            <div>
                                <p className='item-price'>
                                    ${prodCart.price*prodCart.cantidad}
                                </p>
                            </div>
                            <div>
                                <CloseSquareFilled onClick={()=>deleteItem(prodCart.id)} style={{ fontSize: '20px', color: '#000', marginLeft: '1rem' }}  />
                            </div>
                        </div>
                    ))
                }
                <h2 className='text-end' >Precio total: ${totalPrice()} </h2>   
                <button className='btn btn-primary mb-4' onClick={emptyCart}>
                     Vaciar el carrito
                </button>

                <Form />
                </div>

                :
                <NoProduct />
            }
        </div>
    );
};

export default CartContainer;