import React from 'react';
import { Link } from 'react-router-dom';

const NoProduct = () => {
    return (
        <div style={{height: '35rem'}}>
            <h2 style={{paddingTop: '4rem', justifyContent: 'center'}}>NO HAY PRODUCTOS EN EL CARRITO</h2>
            <Link to='/'> 
                <button className='btn-5'> <span>VER PRODUCTOS</span> </button>
            </Link>
        </div>
    );
};

export default NoProduct;