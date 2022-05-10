import React from "react";
import appointment from '../../assets/images/appointment.png';

const Contact = () => {
  return (
    <div style={{
        background:`url(${appointment})`
    }} className='bg-primary px-10 py-14 '>
      <div className='text-center pb-14 text-white'>
        <p className='text-2xl font-bold text-primary'>
          Contact Us
        </p>
        <h1 className='text-5xl '>Stay connected with us</h1>
      </div>
      <div className='grid grid-cols-1 justify-items-center gap-5'>
        <input
          type='text'
          placeholder='Email Address'
          className='input w-full max-w-md'
        />
        <input
          type='text'
          placeholder='Subject'
          className='input w-full max-w-md'
        />
        <textarea
          className='textarea w-full max-w-md'
          placeholder='Your message'
          rows={6}
        ></textarea>
        <button className=" mt-3 btn btn-primary bg-gradient-to-r from-secondary to-primary uppercase font-bold text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all ease-in hover:border-0 border-0">Submit</button>
      </div>
    </div>
  );
};

export default Contact;