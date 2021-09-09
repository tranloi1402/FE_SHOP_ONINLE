import React, { useState } from 'react';

import Header from '../../../components/Dashboard/header';
import Sliderbar from '../../../components/Dashboard/Sliderbar';
import Content from '../../../components/Dashboard/Content';
import '../../../../assets/styles/_class.scss';

const DashboardPage = () => {
    const [isCheck, setIsCheck] = useState(false);
    function onClickBtn() {
        console.log(isCheck);
        setIsCheck(!isCheck);
    }
    return (
        <div className='Dashboard bg-dashboard'>
            <div className='min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white'>
                <Header onClickBtn={onClickBtn} />
                <Sliderbar isCheck={isCheck} />
                <Content />
            </div>
        </div>
    );
};

export default DashboardPage;
