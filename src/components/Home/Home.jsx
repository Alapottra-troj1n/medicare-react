import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Contact from './Contact';
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
          
        </div>
    );
};

export default Home;