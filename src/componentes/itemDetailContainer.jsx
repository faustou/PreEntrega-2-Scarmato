import React, { useEffect, useState } from "react";
import ItemDetail from "./itemDetail";
import { products } from "../products";
import { useParams } from "react-router-dom";
import Loading from "./loading";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    console.log(id)

    // acceder a un documento -> itemDetalContainer
    //useParams
    
    useEffect(()=> {
        const db = getFirestore()
        const queryDoc = doc(db, 'Productos', id)
        getDoc(queryDoc)
        .then(respProd => setItem( { id: respProd.id, ... respProd.data() } ))
        .catch((error) => {
            console.log(error)
        })
        .finally (() => setLoading(false))
    }, [])
    console.log(item)
    

    // useEffect(() => {
    //     const getProduct = () =>{
    //         return new Promise ((res, rej) =>{
    //             const prod = products.find((prod) => prod.id === Number(id));
    //             setTimeout(() => {
    //                 res(prod);
    //                 console.log(prod)
    //             }, 500)
    //         })
    //     }
    //     getProduct().then((res)=>{
    //         setItem(res)
    //     })
    //     .catch((error) =>{
    //         console.log(error)
    //     })
    //     .finally(()=> setLoading(false))
    // }, [id])
    
    return (
        <>
        { loading ? 
            <Loading />
        :
            <ItemDetail item={item} />
            
        }

        </>
    )
    
};
export default ItemDetailContainer;