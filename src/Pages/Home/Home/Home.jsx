import React from 'react';
import Banner from '../../Banner';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';
import HrManagement from './HrManagement/HrManagement';

const Home = () => {
    
    return (
        <div className=''>
            <Banner></Banner>
            <Service></Service>
            <Testimonial></Testimonial>
            <HrManagement></HrManagement>
        </div>
    );
};

export default Home;