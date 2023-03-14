import React, { useEffect, useState } from "react";
import ItemDetail from "./itemDetail";
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