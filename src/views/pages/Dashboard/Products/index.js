import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../../components/Dashboard/header';
import Sliderbar from '../../../components/Dashboard/Sliderbar';
import Products from './listProducts';
import '../../../../assets/styles/_class.scss';
import { productActions, productSelectors } from '../../../../state/modules/product';

const Index = () => {
    const [products, setProducts] = useState([]);
    const prodSelectors = useSelector(productSelectors.getAllProducts);
    console.log('[[ prodSelectors ]]', prodSelectors);
    // console.log('[[ product ]]', product);

    useEffect(() => {
        setProducts(prodSelectors);
    }, [prodSelectors]);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productActions.getAllProduct());
    }, [dispatch]);

    return (
        <div className='Dashboard bg-dashboard'>
            <div className='min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white'>
                <Header />
                <Sliderbar />
                <Products products={products} />
            </div>
        </div>
    );
};

export default Index;
