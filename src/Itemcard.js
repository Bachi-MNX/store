import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

export const Itemcard = (props) => {
    const { addItem } = useCart();
    const [addedToCart, setAddedToCart] = useState(false);

    const handleAddToCart = () => {
        addItem({
            id: props.id,
            price: props.price,
            quantity: 1,
            img: props.img,
            title: props.title
        });
        setAddedToCart(true);
    }

    return (
        <Card  className='m-card'
        hoverable
        style={{
            width: 340,
        }}
        
        cover={
            <Link className='link-2  col-sm justify-content-center' to={`/details?&id=${props.id}&name=${props.title}`}>
                <img alt="example" src={props.img} />
            </Link>
        }
    >
        <Meta title={props.title} description={`Price: $${props.price}`} />
        {
            addedToCart ?
            <Link className='link' to="/cart"><button className=' go-to-cart'>Go to Cart</button></Link>
            :
            <button className='card-button' onClick={handleAddToCart}>Add to cart</button>
        }
        </Card>
    )
}



