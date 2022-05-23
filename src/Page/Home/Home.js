import React from 'react';
import Product from '../Purchase/Product';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Info></Info>
           <Services></Services>
           <Product></Product>
           <Testimonials></Testimonials>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;