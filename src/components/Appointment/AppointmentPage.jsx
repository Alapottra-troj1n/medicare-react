import React, { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../assets/images/chair.png';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import AppointCard from './AppointCard';
import TreatmentModal from './TreatmentModal';

const AppointmentPage = () => {
    const [date , setDate] = useState(new Date());
    const [services , setServices] = useState([]);
    const [treatment , setTreatment] = useState(null)
     useEffect(() => {
        
        const getServices = async() =>{

                const response = await fetch('services.json')
                const data = await response.json();
                setServices(data);
        }
        getServices();


    },[])

    return (
        <div className='container mx-auto'>
            <TreatmentModal treatment={treatment} />
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt="Dentist Chair" className="max-w-xl rounded-lg shadow-2xl ml-10" />
                    <div>
                        <DayPicker
                           mode="single"
                           selected={date}
                           onSelect={setDate}
                        />
                        
                    </div>
               
                </div>
            </div>

            <div className="appointmentCards">
                 {date ?   <h4 className="text-primary text-center text-2xl font-bold my-5"> <span className="font-semibold">Appointment Available For :</span>  
                   
                   {format(date, 'PP')}</h4> :<h4 className="text-primary text-center text-2xl font-bold my-5">Please Pick a Date </h4> }

                   
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                   {services.map(service => <AppointCard service={service} setTreatment={setTreatment} key={service._id} />)}
                   </div>
                </div>


        </div>
    );
};

export default AppointmentPage;