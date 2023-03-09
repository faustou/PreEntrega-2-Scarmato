import React, { useState } from 'react';
import { CloseSquareFilled } from '@ant-design/icons';
import { useCartContext } from '../context/CartContext';
import NoProduct from './NoProduct';
import { addDoc, collection, getFirestore } from "firebase/firestore";

const CartContainer = () => {
    const { cartList, emptyCart, totalPrice, deleteItem } = useCartContext()
    const [dataForm, setDataForm] = useState({
        name:'',
        phone:'',
        email:'',
        validateEmail:''
    })

    const handleOnChange = (event) => {
        setDataForm({
            ...dataForm,
            [event.target.name]: event.target.value
        })
    }
    console.log(dataForm)
    const generarOrden = (event) => {
        event.preventDefault()
        const order = {}
        order.buyer = dataForm
        order.totalPrice = totalPrice()
        order.products = cartList.map(({id, name, price}) => ({id, name, price}))

        const db = getFirestore()
        const queryCollection = collection(db, 'Orders')
        addDoc(queryCollection, order)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(()=> {
            emptyCart()
            setDataForm({
                name:'',
                phone:'',
                email:'',
                validateEmail:''
            })
        })
    }
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

                        <form className='form-group w-50' onSubmit={generarOrden}>
                            <input 
                                type="text" 
                                name='name' 
                                placeholder='ingresar nombre' 
                                className='form-control'
                                onChange={handleOnChange}
                                value={dataForm.name} 
                                required
                            />
                            <input 
                                type="text" 
                                name='phone' 
                                placeholder='ingresar celular' 
                                className='form-control'
                                onChange={handleOnChange}
                                value={dataForm.phone} 
                                required
                            />
                            <input 
                                type="text" 
                                name='email' 
                                placeholder='ingresar email' 
                                className='form-control'
                                onChange={handleOnChange}
                                value={dataForm.email} 
                                required
                            />
                            <input 
                                type="text" 
                                name='validateEmail' 
                                placeholder='repeti tu email' 
                                className='form-control'
                                onChange={handleOnChange}
                                value={dataForm.validateEmail} 
                                required
                            />
                            <button className='btn btn-primary mb-4'>
                                 Generar Orden
                            </button>
                        </form>
                    </div>
            }
        </div>
    );
};

export default CartContainer;