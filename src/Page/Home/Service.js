import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {description,} = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={service.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service.name}</h2>
                <h2>{description}</h2>
            </div>
        </div>
        
    );
};

export default Service;