import React from 'react';
import './singleDoctor.css';

const SingleDoctor = (props) => {

    const {doctorImage,doctorName,doctorDesignation} = props.doctor;

    return (
        <div className="single-doctor">
            <div className="single-doctor-container">
                <div className="single-doctor-image">
                    <img src={doctorImage} alt="" />
                </div>
                <div className="single-doctor-name">
                    <h4>{doctorName}</h4>
                </div>
                <div className="single-doctor-designation">
                    <small>{doctorDesignation}</small>
                </div>
            </div>
        </div>
    );
};

export default SingleDoctor;