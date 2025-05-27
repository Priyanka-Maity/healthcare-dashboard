import React from 'react';
import {anatomyData} from '../data/healthData';
import '../styles/AnatomySection.css';
import anatomy from '../assets/anatomy.png'
const AnatomySection = () => {
    return(
        <section className='anatomy-section'>
            <div className="anatomy-header"><h2>Dashboard</h2>
            </div>
         <div className="anatomy-imgView">
         <img src={anatomy} alt='Anatomy' className='anatomy-img'/>
         </div>
         <div className="indicators">
  {anatomyData.map((item, index) => {
    if (item.organ === "Heart") {
      return (
        <div key={index} className={`organ-label heart-label ${item.color}`}>
          ❤️ {item.status} Heart
        </div>
      );
    } else if (item.organ === "Bone") {
      return (
        <div key={index} className={`organ-label leg-label ${item.color}`}>
          🦵 {item.status} Leg
        </div>
      );
    } else {
      return null;
    }
  })}
</div>

        </section>
    )
}
export default AnatomySection;