import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Searcher = () => {
    return (
        <div>
            <Form className="d-flex">
                <input
                    type="search"
                    placeholder="Buscar"
                    className="me-2"
                    aria-label="Search"
                    //value={searcher}
                    onChange={handlerChange}
                />
                <Button variant="outline-success">Buscar</Button>
            </Form>            
            
        </div>
    );
};

export default Searcher;