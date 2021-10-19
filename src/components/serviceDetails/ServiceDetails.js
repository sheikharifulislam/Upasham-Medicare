import React from 'react';
import { useParams } from 'react-router';
import UseServiceDetailsData from '../../customHook/UseLoadServiceDetailsData';
import './serviceDetails.css';

const ServiceDetails = () => {
    
    const [detailsData] = UseServiceDetailsData();

    const {serviceId} = useParams();
   
    const detials = detailsData.find((data) => data.id === serviceId);
    

    return (
       <section className="service-details-section">
           <div className="container">
               <div className="service-details-section-title">
                   <h1>Service Details</h1>
                   <hr />
               </div>
                <div className="service-details-container">
                    <div className="service-details-text">
                            <p>{detials?.descraption}</p>
                    </div>                    
                </div>
           </div>
       </section>
    );
};

export default ServiceDetails;