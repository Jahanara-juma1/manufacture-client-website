import React from 'react';
import Review from './Review';
const Testimonials = () => {
    const reviews = [
        {
            _id:1,
            name: 'Winson Herry',
            review: 'I am using this camera. It looks amazing and the best camera i have ever used.',
            location: 'california',
            img: 'https://i.ibb.co/xhVFwJX/daniyal-khalil-y5jn-Oj-RXXDw-unsplash.png'
        },
        {
            _id:2,
            name: 'Shabnaj',
            review: 'It looks amazing and the best camera i have ever used.',
            location: 'France',
            img: 'https://i.ibb.co/5FJLvMW/alexandru-zdrobau-BGz8v-O3p-K8k-unsplash-1.png'
        },
        {
            _id:3,
            name: 'James',
            review: 'The latest price of Canon EOS 80D Camera with 18-135mm Lens in Bangladesh is 110,000৳.',
            location: 'Qureya',
            img: 'https://i.ibb.co/JyRkrv2/sobhan-joodi-Zg-Owzl9-YQJU-unsplash.png'
        },
    ];
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-3xl font-bold text-center">Review</h4>
                   
                </div>
                <div>
                   
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review =><Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;