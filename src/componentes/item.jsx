import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    return (
        <div className="item">
            <img src={producto.img} width="300px" alt={producto.title} />
            <article className="info">
                <h2>{producto.title}</h2>
                <div className="info-price">
                    <h5>${producto.price}.-</h5>
                    <div className='dosBotones'>
                    <Link to='/cart' ><button class="btn-5"><span> COMPRAR </span></button></Link>
                    <Link to={`/detail/${producto.id}`}><button class="btn-5"><span> DETALLE </span></button></Link>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Item;