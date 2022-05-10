import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import ServiceCard from './ServiceCard';

const ServicesContainer = () => {

    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',
            img: whitening
        },
    ];

    return (
        <div className='text-center my-40 container mx-auto'>
          <h2 className='text-primary font-bold text-3xl'>Our Services</h2>
          <h2 className='text-5xl mt-2 text-accent'>Services We Provide</h2>
          <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mt-20'>
            {services.map(service => <ServiceCard service={service} />)}

          </div>
        </div>
    );
};

export default ServicesContainer;