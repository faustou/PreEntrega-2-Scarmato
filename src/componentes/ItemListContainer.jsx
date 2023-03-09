import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc, collection, getDocs, query, where } from 'firebase/firestore'
//import { products } from '../products';
import ItemList from './itemList';
import { useParams } from 'react-router-dom';
import Loading from "./loading";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)
    const {categoryName} = useParams()

    //itemlist
    useEffect(()=> {
        const db = getFirestore()
        const queryCollection = collection(db, 'Productos')
        const queryFilter =  categoryName ? query(queryCollection, where('category', '==' ,categoryName || 'groupCategory', '==' ,categoryName)) : queryCollection ;

        getDocs(queryFilter)
        .then(respCollection => setItems( respCollection.docs.map(prod => ({ id: prod.id, ...prod.data() })) )) 
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [categoryName])
    console.log(items)

    return(
        <>
            { loading ? <Loading /> 
            : 
            <div className="container-items">
                <ItemList items={items} />
            </div>
            }
        </>
    );
}
export default ItemListContainer;