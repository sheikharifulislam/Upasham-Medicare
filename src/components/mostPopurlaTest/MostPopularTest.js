import React from 'react';
import UseLoadServiceData from '../../customHook/UseLoadServiceData';
import SingleTest from '../singleTest/SingleTest';
import './mostPopularTest.css';

const MostPopularTest = () => {

    const [AllTest] = UseLoadServiceData();

    return (
        <div className="most-popular-test-section">
            <div className="container">
                <div className="most-popular-test-container">
                    <div className="most-popular-test-title">
                        <h1>Most Popular Test</h1>
                        <hr />
                    </div>
                    <div className="all-popular-test">
                        {
                            AllTest.slice(0, 8).map((service) => <SingleTest key={service.id} service={service} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MostPopularTest;