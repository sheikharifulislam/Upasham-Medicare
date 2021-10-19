import React from 'react';
import Rating from 'react-rating';
import { useHistory} from 'react-router';
import './singleTest.css';

const SingleTest = (props) => {

    const history = useHistory();
   

    const {id,serviceName,serviceImage,rating,price} = props.service;

    const serviceDetails = () => {
        history.push(`/services/${id}`)
    }

    return (
       <div className="single-test">
            <div className="single-test-container">
                <div className="single-test-image">
                    <img src={serviceImage} alt="" />
                </div>
                <div className="single-test-name">
                    <h4>{serviceName}</h4>
                </div>
                <div className="single-test-rating">
                    <Rating
                        readonly
                        initialRating={rating}
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                    />
                    </div>
                <div className="single-test-price">
                    <small>{price} TK</small>
                </div>
                <div className="details-btn">
                    <button onClick={serviceDetails}>Details</button>
                </div>
            </div>
       </div>
    );
};

export default SingleTest;