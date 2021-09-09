import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { productActions, productSelectors } from '../../../../state/modules/product';
import { categoryActions, categorySelectors } from '../../../../state/modules/category';
import Header from '../../../components/Dashboard/header';
import Sliderbar from '../../../components/Dashboard/Sliderbar';
import FormEditPrd from './formEditPrd';

const EditProduct = () => {
    const editProductId = useParams();
    const dispatch = useDispatch();
    const productEdit = useSelector(productSelectors.postEditProduct);
    const [data, setData] = useState({
        description: '',
        status: '',
        _id: '',
        name: '',
        image: '',
        price: '',
        categoryID: ''
    });

    useEffect(() => {
        setData(productEdit);
    }, [productEdit]);

    useEffect(() => {
        dispatch(productActions.editProduct(editProductId.id));
    }, [editProductId, dispatch]);

    const categorys = useSelector(categorySelectors.categories);
    useEffect(() => {
        dispatch(categoryActions.getAllCate());
    }, [dispatch]);

    return (
        <div className='Dashboard bg-dashboard'>
            <div className='min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white'>
                <Header />
                <Sliderbar />
                <FormEditPrd data={data} categorys={categorys} />
            </div>
        </div>
    );
};

export default EditProduct;
