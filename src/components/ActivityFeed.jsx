import React from 'react';
import '../Styles/ActivityFeed.css';

const ActivityFeed = () => {
    return(
        <section className='Acitivity-section'>
        <div className="activity-content">
        <h2>Activity</h2>
            <p>3 appointments on this week</p>
        </div>
            <div className='bars'>
                {[30,50,70,40].map((height, i)=> (
                    <div key={i} className='bar' style={{height:`${height}px`}}></div>
                ))}
            </div>
        </section>
    )
}

export default ActivityFeed;