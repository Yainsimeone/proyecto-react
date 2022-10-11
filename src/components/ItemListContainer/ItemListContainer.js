import "./ItemListContainer.css"
import { useState, useEffect } from "react";
import { getProduct } from "../../asyncMock";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";



const ItemListContainer = () => {
    const [products, setProduct] = useState([])

    useEffect(() => {
            getProduct()
            .then((products) => {
            setProduct(products)
            })
        },[])


    return (
        <>
            <h1 className="item">products</h1>
            {products.map((product) => {
                    return(
                    <Card className="card" key={product.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.img}/>
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>precio: ${product.price}</Card.Text>
                            <Link to={`/detail/${product.id}`}>
                            <Button variant="primary">Compralo Ya!</Button>
                            </Link>
                        </Card.Body>
                    </Card>     
                    )   
                })}
        
        </>
    
    );
}

export default ItemListContainer;