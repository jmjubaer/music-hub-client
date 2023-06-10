import React from 'react';
import Banner from '../banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import Facilities from '../Facilities/Facilities';

const Home = () => {
    return (
        <div>
            <Banner/>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            {/* <Facilities></Facilities> */}
        </div>
    );
};

export default Home;