import React, { useState } from 'react';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useCartContext } from '../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TrackingCode from './trackingCode.jsx';

const Form = () => {
    const { cartList, emptyCart, totalPrice } = useCartContext()

    const [idOrder, setIdOrder] = useState()
    const [giveId, setGiveId] = useState(false)
    const [dataForm, setDataForm] = useState({
        name:'',
        phone:'',
        email:'',
        validateEmail:''
    })

    //toastify
    const notifyOrder = () => toast.success("Orden Generada, Felicidades!");

    const notifyErrorEmail = () => toast.error("Las direcciones de mail no coinciden.");

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

        dataForm.email !== dataForm.validateEmail ? notifyErrorEmail() : 
        addDoc(queryCollection, order)
        .then(resp => setIdOrder(resp))
        .catch(err => console.log(err))
        .finally(()=> {
            emptyCart()
            setDataForm({
                name:'',
                phone:'',
                email:'',
                validateEmail:''
            })
            setGiveId(true)
            notifyOrder()
        })
    }
    return (
        <div>
            {
                giveId==false ?

                <div className='container d-flex align-items-center justify-content-center'> 
                    <form className='form-group w-40' onSubmit={generarOrden}>
                        <h2>COMPLETE LOS DATOS</h2>
                        <input 
                            type="text" 
                            name='name' 
                            placeholder='Nombre completo' 
                            className='form-control'
                            onChange={handleOnChange}
                            value={dataForm.name} 
                            required
                        />
                        <input 
                            type="text" 
                            name='phone' 
                            placeholder='Celular/Telefono' 
                            className='form-control'
                            onChange={handleOnChange}
                            value={dataForm.phone} 
                            required
                        />
                        <input 
                            type="text" 
                            name='email' 
                            placeholder='Correo electronico' 
                            className='form-control'
                            onChange={handleOnChange}
                            value={dataForm.email} 
                            required
                        />
                        <input 
                            type="text" 
                            name='validateEmail' 
                            placeholder='Repetí tu correo electronico' 
                            className='form-control'
                            onChange={handleOnChange}
                            value={dataForm.validateEmail} 
                            required
                        />
                        <button className='btn btn-primary mb-4'>
                            Generar Orden
                        </button>
                    </form>
                    <ToastContainer
                            position="bottom-right"
                            autoClose={4000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"
                        />
                </div>
                :
                    <>
                        <ToastContainer
                            position="bottom-right"
                            autoClose={4000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"
                        />
                        <TrackingCode idOrder={idOrder} />
                    </>
            }
        </div>
    );
};

export default Form;