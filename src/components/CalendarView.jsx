import React from 'react';
import { calendarWeekData, calendarCards } from '../data/upcomingAppointments';
import '../styles/CalendarView.css';

const CalendarView = () => {
  return (
    <section className="calendar-view">
      <div className="calendar-header">
        <h2>October 2021</h2>
        <div className="arrows">← →</div>
      </div>

      <div className="calendar-week">
        {calendarWeekData.map((day, i) => (
          <div key={i} className="calendar-column">
            <div className="weekday">{day.day}</div>
            <div className='date'>{day.date}</div>
            <div className="slots">
              {day.slots.map((slot, idx) => (
                <span
                  key={idx}
                  className={`slot ${day.highlighted === slot ? 'highlighted' : ''}`}
                >
                  {slot}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="calendar-appointments">
        {calendarCards.map((card, i) => (
          <div
            key={i}
            className="calendar-card"
            style={{ backgroundColor: card.bgColor, color: card.textColor }}
          >
            <div className="calendar-icon">{card.icon}</div>
            <div>
              <p className="card-title">{card.title}</p>
              <small>{card.time}</small><br />
              <small>{card.doctor}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CalendarView;