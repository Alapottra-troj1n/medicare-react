import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../assets/images/chair.png';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentPage = () => {
    const [date , setDate] = useState(new Date())

    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt="Dentist Chair" class="max-w-xl rounded-lg shadow-2xl ml-10" />
                    <div>
                        <DayPicker 
                           mode="single"
                           selected={date}
                           onSelect={setDate}
                        />
                        <p>Selected : {format(date, 'PP')}</p>
                     
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentPage;