import React from 'react';
// import fluoride from '../../assets/images/fluoride.png';
// import cavity from '../../assets/images/cavity.png';
// import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services =[
        {
            _id: 1, 
            name: '100+',
            description: 'Customars',
            img: 'https://i.ibb.co/tPcpLDv/man-1-1.png'
        },
        {
            _id: 2, 
            name: '33k+',
            description: 'Reviews',
            img: 'https://i.ibb.co/jbW7xdr/review-1-1.png'
        },
        {
            _id: 3, 
            name: '120m+',
            description: 'Annual revenue',
            img: 'https://i.ibb.co/c2788Rj/money-2-1.png'
        },
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
            <h3 className='text-primary text-xl font-bold uppercase'>Business Summary</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service =><Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;