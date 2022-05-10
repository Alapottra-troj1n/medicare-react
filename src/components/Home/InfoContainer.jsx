import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import navi from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const InfoContainer = () => {
    const infoCardOne = {
            icon : clock,
            headline : 'Opening Hours',
            description : 'Lorem Ipsum is simply dummy text of the pri'
    }
    const infoCardTwo = {
            icon : navi,
            headline : 'Visit our location',
            description : 'Brooklyn, NY 10036, United States'
    }
    const infoCardThree = {
            icon : phone,
            headline : 'Contact us now',
            description : '+000 123 456789'
    }

    return (
        <div className='grid grid-cols-3 gap-5 my-10'>
            <InfoCard infoCard={infoCardOne} ></InfoCard>
            <InfoCard infoCard={infoCardTwo} difference={true} ></InfoCard>
            <InfoCard infoCard={infoCardThree} ></InfoCard>
        </div>
    );
};

export default InfoContainer;