import { SnippetsOutlined } from '@ant-design/icons';
import React from 'react';
import './trackingCode.scss';

const TrackingCode = ({idOrder}) => {
    return (
        <div className='order-container'>
            <div className='d-flex flex-column'>
                <SnippetsOutlined style={{ fontSize: '35px', color: '#000', marginLeft: '1rem' }} />
                <h3>TU ORDEN DE COMPRA SE REALIZO CORRECTAMENTE</h3>
            </div>
            <p>uno de nuestros empleados se pondra en contacto contigo.</p>
            <p> CODIGO DE SEGUIMIENTO: {(idOrder.id)} </p>
        </div>
    );
};

export default TrackingCode;