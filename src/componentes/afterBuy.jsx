import React from 'react';
import { Link } from "react-router-dom"

const AfterBuy = () => {
    return (
        <div className="row-gap-3 m-2">
            <Link to='/cart'>
                <button className="btn-5 m-2">
                    <span>
                        Ir a cart
                    </span>
                </button>
            </Link>
            <Link to='/'>
                <button className="btn-5 m-2">
                    <span>
                        Seguir Compra
                    </span>
                </button>
            </Link>
        </div>
    );
};

export default AfterBuy;