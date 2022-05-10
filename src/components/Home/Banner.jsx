import React from 'react';
import chair from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div>
            <div className="hero my-40 lg:my-60">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='chair' className="max-w-xl rounded-lg shadow-2xl" />
                    <div className="pr-8">
                        <h1 className="text-6xl leading-tight font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6 pr-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary uppercase font-bold text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all ease-in hover:border-0 border-0">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;