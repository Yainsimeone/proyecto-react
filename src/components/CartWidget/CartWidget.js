import "./CartWidget.css"
import cart from "./asset/cart.svg"
import Button from 'react-bootstrap/Button';

const CartWidget = () => {
    return (
        <div>   
            
            <Button className="button" variant="success"><img src={cart} alt="cart"></img>10</Button>
            
        </div>
    );
};


export default CartWidget;