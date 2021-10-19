import React from 'react';
import UseLoadServiceData from '../../customHook/UseLoadServiceData';
import SingleTest from '../singleTest/SingleTest';
import './allServices.css';

const AllServices = () => {

    const [allTest] = UseLoadServiceData();

    return (
        <section className="all-service-section">
            <div className="container">
                <div className="all-service-section-title">
                    <h1>Our All Services</h1>
                    <hr />
                </div>
                <div className="all-services-container">
                    {
                        allTest.map((service) => <SingleTest key={service.id} service={service}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default AllServices;