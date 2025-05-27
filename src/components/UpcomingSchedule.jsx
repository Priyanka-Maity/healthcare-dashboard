import React from 'react';
import { upcomingAppointments } from '../data/upcomingAppointments';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import '../styles/UpcomingSchedule.css';

const UpcomingSchedule = () => {
    const selectedDays = upcomingAppointments.filter(day =>
        day.day === 'Thursday' || day.day === 'Saturday'
    );

    return (
        <section className='upcoming-schedule'>
            <h2>The Upcoming Schedule</h2>
            <div className='columns-container'>
                {
                    selectedDays.map((day, idx) => (
                        <div key={idx} className='day-column'>
                            <h3>On {day.day}</h3>
                            <div className='day-appointments'>
                                {day.appointments.map((app, i) => (
                                    <SimpleAppointmentCard key={i} {...app} />
                                ))}
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default UpcomingSchedule;
