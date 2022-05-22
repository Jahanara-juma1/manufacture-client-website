import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {description,} = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={service.img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{service.name}</h2>
                <h2>{description}</h2>
            </div>
        </div>
        
    );
};

export default Service;