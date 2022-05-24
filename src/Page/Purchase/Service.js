import React from 'react';

const Service = ({ service, setProduct }) => {
    const {name, price, img, description, orderquantity, availablequantity} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Price:{price}</p>
                <p>Order-quantity: {orderquantity}</p>
                <p>available-quantity: {availablequantity}</p>
                <p>{description}</p>
                <div className="card-actions">
                    
            <label htmlFor="booking-modal" 
            onClick={() =>setProduct(service)}
            className="btn btn-primary text-white uppercase bg-gradient-to-r from-secondary to-primary">Buy Now</label>
            </div>
            </div>
        </div>
    );
};

export default Service;