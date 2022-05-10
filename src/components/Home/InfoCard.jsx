import React from 'react';


const InfoCard = ({infoCard, difference}) => {
    return (
        <div className={`flex justify-center items-center p-9 rounded-lg ${difference ? "bg-accent text-white" : "bg-gradient-to-r from-secondary to-primary" } `}>
            <div className="icon">
                <img src={infoCard.icon} alt="" />
            </div>
            <div className="mx-5">
                <h2 className="text-2xl font-semibold">{infoCard.headline}</h2>
                <p className='font-thin'>{infoCard.description}</p>
            </div>
        </div>
    );
};

export default InfoCard;