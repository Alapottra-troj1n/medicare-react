import { format } from 'date-fns';
import React from 'react';

const TreatmentModal = ({ treatment, date }) => {
    const {slots} = treatment;

    const handleBooking = (e) =>{
        e.preventDefault();
        const data = {
            date : e.target.date.value,
            slot : e.target.slot.value,
            name : e.target.name.value,
            phone : e.target.phone.value,
            email : e.target.email.value
        }
        console.log(data);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-xl text-secondary text-center my-10 ">{treatment?.name}</h3>
                    <form className="flex flex-col justify-center items-center gap-3" onSubmit={handleBooking}>
                        <input type="text" name='date' value={format(date, 'PP')} disabled class="input input-bordered input-secondary w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Full Name" required class="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' required placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' required placeholder="Email" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submir"  className="btn"/>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default TreatmentModal;