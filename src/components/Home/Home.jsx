import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
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
            <Testimonials/>
        </div>
    );
};

export default Home;