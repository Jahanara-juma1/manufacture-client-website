import React from 'react';

const InfoCard = ({img, cardTitle, cardInfo, bgClass}) => {
    return (
        <div class={`card card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pl-5'>
                <img src={img} alt="Movie" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{cardInfo}</p>
            </div>
            </div>
    );
};

export default InfoCard;
