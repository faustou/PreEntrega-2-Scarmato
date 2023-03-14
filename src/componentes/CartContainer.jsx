import React from 'react';
import './CartContainer.scss'
import { CloseSquareFilled } from '@ant-design/icons';
import { useCartContext } from '../context/CartContext';
import NoProduct from './NoProduct';
import Form from './form.jsx';
import { Link } from 'react-router-dom';

const CartContainer = () => {
    const { cartList, emptyCart, totalPrice, deleteItem, prueba } = useCartContext()
    return (
        <div className='cart-main-container'>
            {
                prueba==true ?
                <div className='container item-cart-container'>
                {
                    cartList.map(prodCart => (
                        <div key={prodCart.id} className='d-flex align-items-center justify-content-center p-2 item-container'>
                            <div>
                                <img src={prodCart.img} style= {{ width: '75px' }} />
                            </div>
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
                        <div>
                            <h2 className='text-end price-total' >PRECIO TOTAL: ${totalPrice()} </h2>   
                        </div>
                        <div className='button-container'>
                            <button className='btn-5' onClick={emptyCart}>
                                <span>
                                    Vaciar el carrito
                                </span>
                            </button>
                            <Link to='/'>
                                <button className='btn-5'>
                                    <span>
                                        Volver al menu
                                    </span>
                                </button>
                            </Link>
                        </div>
                        <div>
                            <Form />
                        </div>
                </div>

                :
                <NoProduct />
            }
        </div>
    );
};

export default CartContainer;