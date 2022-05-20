import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const TreatmentModal = ({ treatment, date, setTreatment, refetch }) => {
    const {slots} = treatment;
    const formattedDate = format(date, 'PP');
    const [user, loading, error] = useAuthState(auth);
   

    const handleBooking = (e) =>{
        e.preventDefault();


        const slot = e.target.slot.value ;

        const booking = {
            treatmentId: treatment._id,
            treatment: treatment.name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: e.target.phone.value
        }
        const getAppointment = async()=>{
            const settings = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(booking)
            }
            const res = await fetch('http://localhost:5000/booking', settings)
            const data = await res.json();
            if(data.success){
                toast.success(`Booking is sucessfully added ${formattedDate}, ${slot}`)
            }else{
                toast.error(`Already have a booking on ${data.booking.date} at ${data.booking.slot}`)
            }
          
           setTreatment(null);
           refetch();


        }
        getAppointment();

    
       
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-xl text-secondary text-center my-10 ">{treatment?.name}</h3>
                    <form className="flex flex-col justify-center items-center gap-3" onSubmit={handleBooking}>
                        <input type="text" name='date' value={format(date, 'PP')} disabled className="input input-bordered input-secondary w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value = {user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="email" disabled name='email' value = {user?.email || ''}  className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit"  className="btn"/>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default TreatmentModal;