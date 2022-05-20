import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const MyAppointment = () => {
    const [user, loading, error] = useAuthState(auth);
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        const fetchMyAppointments = async () => {
            const response = await fetch(`http://localhost:5000/booking?patient=${user.email}`);
            const data = await response.json();
            console.log(data)
            setAppointments(data);
        }
        fetchMyAppointments();
    }, [])

    if(loading){
        return <Loading/>
    }


    return (
        <div>

            <div>
               
                    <table class="table-normal w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Patient Name</th>
                                <th>Appointment Date</th>
                                <th>Slot Time</th>
                                <th>Treatment</th>
                            </tr>
                        </thead>
                        <tbody>
                          {appointments.map(((appoint,index) => {
                              return (
                                <tr>
                                <th>{index+1}</th>
                                <td>{appoint.patientName}</td>
                                <td>{appoint.date}</td>
                                <td>{appoint.slot}</td>
                                <td>{appoint.treatment}</td>
                            </tr>
                              )
                          }))}
                 
                        </tbody>
                    </table>
           

            </div>
        </div>
    );
};

export default MyAppointment;