import React from 'react';
import './ourappoinment.css';
import appoinmentFormImage from '../../images/appointmnet.svg';

const OurAppoinment = () => {
    return (
       <section className="our-appoinment-section">
           <div className="container">
               <div className="our-appoinmnet-title">
                   <h1>book an appoinment for good helth</h1>
                   <hr />
               </div>
               <div className="appoinment-container">
                   <div className="appoinment-image">
                       <img src={appoinmentFormImage} alt="" />
                   </div>
                   <div className="appoinment-form">
                       <h3 className="appoinment-title">book an appoinment</h3>                     
                       <form action="">
                            <div className="form-design">
                               <select name="" id="select-department">
                                   <option value="Select A Department">Select A Department</option>
                                   <option value="General And Laparoscopic surgery">General And Laparoscopic surgery</option>
                                   <option value=""></option>
                               </select>
                               <select name="" id="select-doctor">
                                    <option value="">Select Doctor</option>
                                    <option value="">Dr. Rezona Rima</option>
                                    <option value="">Prof Dr. Ishrat jahan lucky</option>
                                </select>                             
                            </div>
                            <div className="form-design">
                                <input type="email" placeholder="Enter Your Email*" id="patient-email"/>
                                <input type="tel" placeholder="Enter Your Phone Number*" id="patient-phone-number"/>
                            </div>
                            <div className="form-design">
                                <input type="text" placeholder="Patient Name*" id="patient-name"/>
                            </div>
                            <div className="form-design">
                                <input type="number" placeholder="Age*" id="patient-age"/>
                                <input type="text" placeholder="DD-MM-YYY" onBlur="(type='date')" id="patient-birthday"/>
                            </div>
                            <div className="form-design">
                                <h4 id="gender-title">Gender</h4>
                                <input type="radio" id="male" name="gender"/>
                                <label htmlFor="male"  id="gender-label">Male</label>
                                <input type="radio" id="female" name="gender"/>
                                <label htmlFor="female" id="gender-label">Female</label>
                            </div>
                            <div className="form-design">
                                <input type="text" placeholder="Enter Your City*" id="select-city" />
                                <input type="text" placeholder="Enter Your Address*" id="patient-address"/>
                            </div>
                            <div className="form-design">
                                <h4 id="appoinment-title">Appointment Type</h4>
                                <input type="radio" id="live-video-call" name="appoinment"/>
                                <label htmlFor="live-video-call" id="appoinment-type">Live Video Call</label>
                                <input type="radio" id="chamber" name="appoinment"/>
                                <label htmlFor="chamber" id="appoinment-type">Chamber</label>
                            </div>
                            
                            <div className="form-design">
                                <input type="submit" value="Submit"/>
                            </div>
                       </form>
                   </div>
               </div>
           </div>
       </section>
    );
};

export default OurAppoinment;