import React from 'react';
import UseLoadDoctorData from '../../customHook/UseLoadDoctorData';
import SingleDoctor from '../singleDoctor/SingleDoctor';
import './allDoctors.css';

const AllDoctors = () => {

    const [doctors]  = UseLoadDoctorData();

    return (
        <section className="all-doctors-section">
            <div className="container">
                <div className="all-doctors-section-title">
                    <h1>Our All Doctors</h1>
                    <hr />
                </div>
                <div className="all-doctors">
                    {
                        doctors.map((doctor) => <SingleDoctor key={doctor.id} doctor={doctor} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default AllDoctors;