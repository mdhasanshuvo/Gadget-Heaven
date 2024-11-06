import React, { useContext } from 'react';
import { WishContext } from '../Root/Root';

const WishList = () => {
    const [wish] = useContext(WishContext);

    return (
        <div className='container mx-auto'>
            <h2>WishList</h2>

            {wish.length === 0 ? (
                <p>Your wish is empty.</p>
            ) : (
                wish.map((wishItem, index) => (
                    <div key={index} className="card lg:card-side bg-base-100 shadow-xl my-4">
                        <figure>
                            <img
                                src={wishItem.product_image}
                                alt={wishItem.product_title}
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{wishItem.product_title}</h2>
                            <p>Price: ${wishItem.price}</p>
                            <p>{wishItem.description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                )))}
        </div>
    );
};

export default WishList;
