import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';

const Item = ({ producto }) => {
    return (
            <div className="item">
                <img src={producto.img} width="300px" alt={producto.title} />
                <img src={producto.imgGroup} className='imgGroup' />
                <article className="info">
                    <h2>{producto.title}</h2>
                    <div className="info-price col">
                        <h5>${producto.price}.-</h5>
                        <Link to={`/detail/${producto.id}`} >
                            <button className="btn-5"><span> DETALLE </span></button>
                        </Link>
                    </div>
                </article>
            </div>
    );
};

export default Item;