import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"

const AfterBuy = () => {
    return (
        <div className="row-gap-3 m-2">
            <Link to='/cart'>
                <button className="btn-5 m-2">
                    <span>
                        Ir a cart <ShoppingCartOutlined style={{ fontSize: '20px', color: '#fff' }} />
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