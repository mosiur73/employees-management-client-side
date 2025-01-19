import React from 'react';
import Banner from '../../Banner';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';
import HrManagement from './HrManagement/HrManagement';
import PayManagement from '../PayManagement/PayManagement';
import HelpManage from '../HelpManage/HelpManage';

const Home = () => {
    
    return (
        <div className='space-y-8'>
            <Banner></Banner>
            <Service></Service>
            <HrManagement></HrManagement>
            <PayManagement></PayManagement>
            <Testimonial></Testimonial>
            <HelpManage></HelpManage>
        </div>
    );
};

export default Home;