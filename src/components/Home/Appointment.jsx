import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png'

const Appointment = () => {
    return (
        <div className="my-40" style={{ background: `url(${appointment})` }}>
            <div className="flex justify-center items-center container mx-auto py-16 lg:p-0">
                <div className="flex-1 hidden lg:flex">
                    <img className="mt-[-200px]" src={doctor} alt="" />
                </div>
                <div className="flex-1">
                    <h2 className="text-3xl font-semibold text-primary">Appointment</h2>
                    <h1 className="text-5xl font-semibold text-white ">Make an appointment Today</h1>
                    <p className="mt-3 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className=" mt-3 btn btn-primary bg-gradient-to-r from-secondary to-primary uppercase font-bold text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all ease-in hover:border-0 border-0">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default Appointment;