import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Info></Info>
           <Services></Services>
           <Contact></Contact>
        </div>
    );
};

export default Home;