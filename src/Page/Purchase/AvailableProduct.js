import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';


const AvailableProduct = () => {
    const [services, setServices] = useState([]);
    const [product, setProduct] = useState(null);

    useEffect( () =>{
        fetch('services.json')
        .then(res=> res.json())
        .then(data => setServices(data));

    }, [])
    return (
        <div>
            <h2 className='text-2xl text-primary text-center'>Our Product</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service=><Service
                    key={service._id}
                    service={service}
                    setProduct={setProduct}
                    ></Service>)
                }
            </div>
            {product && <BookingModal
             product={product}
             setProduct={setProduct}
             ></BookingModal>}
        </div>
    );
};

export default AvailableProduct;