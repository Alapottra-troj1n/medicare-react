import React from 'react';

const AppointCard = ({ service }) => {
    const { name, slots } = service;
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl p-5">
                <div class="card-body text-center">
                    <h2 class="text-2xl font-semibold text-center">{name}</h2>
                    <p>{
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try another date.</span>
                    }</p>
                    <p>{slots.length ? slots.length + ' spaces available' : slots.length + ' space available'}</p>
                    <div class="card-actions justify-center">
                        <button class="btn btn-primary">Book Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointCard;