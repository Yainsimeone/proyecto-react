import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';




const ItemDetailContainer = () => {
    const [products, setProduct] = useState([])

    const { productsid } = useParams()

    useEffect(() => {
        getProductById(productsid)
        .then((product) => {
            setProduct(product);
        });
    },[], );
    
    return(
    <>
        <h1>detalle</h1>
        <ItemDetail {...products}/>
    </>
    );
};

export default ItemDetailContainer;