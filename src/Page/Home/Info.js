import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle="opening Hours" cardInfo="Opens 10AM-10PM" 
        
            bgclassName="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
            <InfoCard cardTitle="Store Locator" cardInfo="Chadima Complex, 1st Floor, Pouro Bazar Rd, Rangpur" bgclassName="bg-[#f6d860]" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact Us" cardInfo="09678002003"  bgclassName="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
        </div>
    );
};


export default info;