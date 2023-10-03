import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { remove } from '../store/cartSlice';


const Cart = () => {
    const Products = useSelector(state => state.cart);
    const dispatch=useDispatch();
    const removeToCart=(id)=>{
            dispatch(remove(id));
    }



    const cards = Products.map(Product => (
        <div className="col-md-12 p-4" key={Product.id}>
            <Card className='h-100'>
                <div className='text-centre'>
                    <Card.Img variant="top" src={Product.image} style={{ width: '100px', height: '180px' }} />
                </div>
                <Card.Body>
                    <Card.Title>{Product.title}</Card.Title>
                    <Card.Text>
                        ${Product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="danger" onClick={()=>removeToCart(Product.id)
 }>remove item</Button>
                </Card.Footer>
            </Card>
        </div>
    ));

    return (
        <div>
            {cards}
        </div>
    )
}

export default Cart;
