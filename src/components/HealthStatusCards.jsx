import React from 'react';
import { anatomyData } from '../data/healthData';
import '../styles/HealthStatusCards.css';

const HealthStatusCards = () => {
    const filtered = anatomyData.filter(item => item.organ !== 'Heart');
    return (
        <div className="health-cards">
            {filtered.map((item, index) => (
                <div key={index} className="card">
                    <div className='card-header'>
                        <span className='icon'>
                            {item.icon}
                        </span>
                        <h4>{item.organ}</h4>
                    </div>
                    <p>Date: {item.Date}</p>
                    <span className={`status-indicator ${item.color}`}></span>
                   
                </div>
            ))}
        </div>
    )
}
export default HealthStatusCards;