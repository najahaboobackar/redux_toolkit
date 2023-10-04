import React from 'react'
import { useState,useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch ,useSelector} from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/ProductSlice';
import { Alert } from 'bootstrap';


const Product = () => {
    const dispatch =useDispatch();
    const{data:Products,status}=useSelector(state=>state.products);
   
    useEffect(()=>{
        dispatch(getProducts())
        //fetch('https://fakestoreapi.com/products')
        //.then(data=>data.json()).then(result=>getProducts(result))
    },[]);
if(status=='loading'){
    return<div>Loading</div>
}

id(status=='error'){
    return <Alert key="danger " variant="danger"> something happens....!</Alert>
}
    const addToCart=(Product)=>{
        dispatch(add(Product))

    }

    const cards = Products.map(Product=>(
        <div className="col-md-3 p-4">
             <Card style={{ width: '18rem' }} key={Product.id} className='h-100'>
                <div className='text-centre'>
      <Card.Img variant="top" src={Product.image}  style={{width:'100px', height:'180px' }}/>
    </div>
      <Card.Body>
        <Card.Title>{Product.title}</Card.Title>
        <Card.Text>
        ${Product.price}
        </Card.Text>
        
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" onClick={()=>addToCart(Product)}>add to cart</Button>
      </Card.Footer>
    </Card>
        </div>
    ))
  return (
    <>
      <h1>Product</h1>
<div className='row'>
    {cards}
</div>
    </>
  )
}

export default Product
