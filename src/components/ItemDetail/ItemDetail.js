import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ id, name, categoty, img, stock, price, description})=>{
    return (
        <Card style={{ width: '35rem' }}>
            <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>precio: ${price}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
        </Card>
    )

};


export default ItemDetail;