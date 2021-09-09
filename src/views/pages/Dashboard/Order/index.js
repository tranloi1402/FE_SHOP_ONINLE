import React from 'react';

import Header from '../../../components/Dashboard/header';
import Sliderbar from '../../../components/Dashboard/Sliderbar';
import ListOrders from './listOrders';
import '../../../../assets/styles/_class.scss';

const index = () => (
    <div className='Dashboard bg-dashboard'>
        <div className='min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white'>
            <Header />
            <Sliderbar />
            <ListOrders />
        </div>
    </div>
);

export default index;
