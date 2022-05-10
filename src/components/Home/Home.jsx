import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import InfoContainer from './InfoContainer';
import ServicesContainer from './ServicesContainer';

const Home = () => {
    return (
        <div>
            <Banner/>
            <InfoContainer/>
            <ServicesContainer/>
            <Appointment/>
        </div>
    );
};

export default Home;