import React from 'react';
import HeaderBanner from '../headerBanner/HeaderBanner';
import MostPopulrDoctor from '../mostPopularDoctor/MostPopulrDoctor';
import MostPopularTest from '../mostPopurlaTest/MostPopularTest';
import OurAppoinment from '../ourAppoinment/OurAppoinment';

const Home = () => {
    return (
       <>
        <HeaderBanner/>
        <MostPopularTest/>
        <MostPopulrDoctor/>
        <OurAppoinment/>      
       </>
    );
};

export default Home;