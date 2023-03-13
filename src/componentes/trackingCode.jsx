import React from 'react';

const TrackingCode = ({idOrder}) => {
    return (
        <div>
            <h3>TU ORDEN DE COMPRA SE REALIZO CORRECTAMENTE</h3>
            <p>uno de nuestros empleados se pondra en contacto contigo.</p>
            <h2> CODIGO DE SEGUIMIENTO: {(idOrder.id)} </h2>
        </div>
    );
};

export default TrackingCode;