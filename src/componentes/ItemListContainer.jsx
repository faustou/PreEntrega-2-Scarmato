import React, { useEffect, useState } from "react";
import { products } from '../products';
import ItemList from './itemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const {categoryName} = useParams()

    useEffect(() => {
        const getProducts = () => {
            return new Promise((res, rej) => {
                const productosFiltrado = products.filter((prod) => prod.category === categoryName);
                const prodListados = categoryName ? productosFiltrado : products ;
                setTimeout(() => {
                    res(prodListados);
                }, 200);
            });
        };
        getProducts()
            .then((res) =>{
                setItems(res);
            })
            .catch((error) =>{
                console.log(error);
            });
    }, [categoryName]);

    return(
        <div className="container-items">
            <ItemList items={items} />
        </div>

    );
}
export default ItemListContainer;