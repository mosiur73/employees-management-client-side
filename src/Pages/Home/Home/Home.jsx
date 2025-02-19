import React from 'react';
import Banner from '../../Banner';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';
import HrManagement from './HrManagement/HrManagement';
import PayManagement from '../PayManagement/PayManagement';
import HelpManage from '../HelpManage/HelpManage';
import { Helmet } from 'react-helmet-async';
import FaqPage from '../FaqPage/FaqPage';
import DownloadApp from '../DownloadApp/DownloadApp';

const Home = () => {
    
    return (
        <div className='space-y-8'>
            <Helmet>
                            <title>Emplyee-Home</title>
                        </Helmet>
            <Banner></Banner>
            <Service></Service>
            <HrManagement></HrManagement>
            <PayManagement></PayManagement>
            <Testimonial></Testimonial>
            <HelpManage></HelpManage>
            <FaqPage></FaqPage>
            <DownloadApp></DownloadApp>
        </div>
    );
};

export default Home;