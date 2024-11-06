import React, { useContext } from 'react';
import { CardContext } from '../Root/Root';

const Cart = () => {
    const [card] = useContext(CardContext);

    return (
        <div className='container mx-auto'>
            <h2>Cart</h2>
            {card.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                card.map((cartItem, index) => (
                    <div key={index} className="card lg:card-side bg-base-100 shadow-xl my-4">
                        <figure>
                            <img
                                src={cartItem.product_image}
                                alt={cartItem.product_title}
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{cartItem.product_title}</h2>
                            <p>Price: ${cartItem.price}</p>
                            <p>{cartItem.description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
