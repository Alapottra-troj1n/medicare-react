import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import InfoContainer from './InfoContainer';
import ServicesContainer from './ServicesContainer';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div>
            <Banner/>
            <InfoContainer/>
            <ServicesContainer/>
            <Appointment/>
            <Contact/>
            <Testimonials/>
            <Footer/>
        </div>
    );
};

export default Home;