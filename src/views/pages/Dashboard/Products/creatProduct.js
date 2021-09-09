import React from 'react';

import Header from '../../../components/Dashboard/header';
import Sliderbar from '../../../components/Dashboard/Sliderbar';
import FormCreatProduct from './formCreatPrd';

const creatProduct = () => (
    <div className='Dashboard bg-dashboard'>
        <div className='min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white'>
            <Header />
            <Sliderbar />
            <FormCreatProduct />
        </div>
    </div>
);

export default creatProduct;
