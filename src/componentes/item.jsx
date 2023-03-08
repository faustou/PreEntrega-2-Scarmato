import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    return (
        <Link to={`/detail/${producto.id}`}>
            <div className="item">
                <img src={producto.img} width="300px" alt={producto.title} />
                <article className="info">
                    <h2>{producto.title}</h2>
                    <div className="info-price">
                        <h5>${producto.price}.-</h5>
                    </div>
                </article>
            </div>
        </Link>
    );
};

export default Item;