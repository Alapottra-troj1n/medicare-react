import React from 'react';

const AppointCard = ({ service,setTreatment }) => {
    const { name, slots } = service;
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl p-5">
                <div className="card-body text-center">
                    <h2 className="text-2xl font-semibold text-center text-secondary">{name}</h2>
                    <p className="text-lg font-medium">{
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try another date.</span>
                    }</p>
                    <p>{slots.length ? slots.length + ' spaces available' : slots.length + ' space available'}</p>
                    <div className="card-actions justify-center">
                        <label for="booking-modal" className="btn modal-button btn btn-primary bg-gradient-to-r from-secondary to-primary uppercase font-bold text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all ease-in hover:border-0 border-0" disabled={slots.length===0} onClick={()=> setTreatment(service)} >Book Appointment</label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointCard;