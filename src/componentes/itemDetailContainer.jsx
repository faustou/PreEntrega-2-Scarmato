import React, { useEffect, useState } from "react";
import ItemDetail from "./itemDetail";
import { products } from "../products";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    const {id} = useParams()
    console.log(id)
    useEffect(() => {
        const getProduct = () =>{
            return new Promise ((res, rej) =>{
                const prod = products.find((prod) => prod.id === Number(id));
                setTimeout(() => {
                    res(prod);
                    console.log(prod)
                }, 500)
            })
        }
        getProduct().then((res)=>{
            setItem(res)
        })
        .catch((error) =>{
            console.log(error)
        })
    }, [id])
    return <ItemDetail item={item} />
};
export default ItemDetailContainer;