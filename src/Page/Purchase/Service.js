import React from 'react';

const Service = ({ service, setProduct }) => {
    const {name, price, img, description, orderquantity, availablequantity} = service;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
            <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>Price:{price}</p>
                <p>Order-quantity: {orderquantity}</p>
                <p>available-quantity: {availablequantity}</p>
                <p>{description}</p>
                <div class="card-actions">
                    
            <label for="booking-modal" 
            onClick={() =>setProduct(service)}
            class="btn btn-primary text-white uppercase bg-gradient-to-r from-secondary to-primary">Buy Now</label>
            </div>
            </div>
        </div>
    );
};

export default Service;