import React from 'react';
import '../styles/SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({title, time, icon}) => {
    return(
        <div className="simple-card">
            <span className='icon'>{icon}</span>
            <div>
                <p>{title}</p>
                <small>{time}</small>
            </div>
        </div>
    )
}

export default SimpleAppointmentCard;
