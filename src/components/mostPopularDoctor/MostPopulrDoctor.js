import React from 'react';
import UseLoadDoctorData from '../../customHook/UseLoadDoctorData';
import SingleDoctor from '../singleDoctor/SingleDoctor';
import './mostPopulatDoctor.css';

const MostPopulrDoctor = () => {

    const [doctors] = UseLoadDoctorData();

    return (
       <section className="most-popular-doctor-section">
           <div className="container">
               <div className="most-popular-doctor-title">
                   <h1>Most Popular Doctor</h1>
                   <hr />
               </div>
               <div className="all-most-popular-doctor">
                   {
                       doctors.slice(0, 4).map((doctor) => <SingleDoctor key={doctor.id} doctor={doctor} />)
                   }
               </div>
           </div>
       </section>
    );
};

export default MostPopulrDoctor;