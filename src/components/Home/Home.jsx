import React from 'react';
import Banner from './Banner';
import InfoContainer from './InfoContainer';

const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner/>
            <InfoContainer/>
        </div>
    );
};

export default Home;