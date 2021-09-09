import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { productActions, productSelectors } from '../../../../state/modules/product';
import Product from './product';
import '../../../../assets/styles/_class.scss';

const CART_STORE_KEY = 'LIST_CART';

const ProductList = () => {
    const dispatch = useDispatch();

    // product
    const listProducts = useSelector(productSelectors.getAllProducts);
    useEffect(() => {
        dispatch(productActions.getAllProduct());
    }, [dispatch]);

    const [cartsList, setCartList] = useState([]);

    // lấy về lên localStorerage
    useEffect(() => {
        const localStorageCart = localStorage.getItem(CART_STORE_KEY);
        if (localStorageCart) {
            setCartList(JSON.parse(localStorageCart));
        }
    }, []);
    // đẩy lên localStorerage
    useEffect(() => {
        console.log('đâyr', cartsList);
        localStorage.setItem(CART_STORE_KEY, JSON.stringify(cartsList));
    }, [cartsList]);

    // cart
    console.log(cartsList);
    const [message, setMessage] = useState();
    const addToCart = ({ _id, name, image, price, qty }) => {
        const total = qty * price;
        const check = cartsList.filter((item) => item._id === _id);
        // console.log('[ckeck product to cart]', check.length);
        if (check.length === 0) {
            setCartList([...cartsList, { _id, name, image, price, qty, total }]);
        } else {
            setMessage('Bạn đã có sản phẩm này trong rỏ hàng!!!!!');
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setMessage();
        }, 5000);
    }, [message]);

    return (
        <>
            <div
                className={
                    message ? 'fixed top-12 right-3 shadow-lg ml z-40' : 'hidden'
                }
            >
                <div className="bg-white rounded-lg mt-5 border py-2 px-4">
                    <i
                        className="far fa-check-circle pr-3 text-green-500 text-xl font-semibold"
                    />
                    <span className="font-semibold">
                        {message}
                    </span>
                </div>
            </div>
            <div className='container mx-auto sm:my-10 mt-20 overflow-hidden'>
                <div className='text-center my-8'>
                    <h1 className='text-gray-900 font-bold text-3xl uppercase'>Danh sách sản phẩm ❤❤❤❤</h1>
                </div>
                <div className='grid justify-items-center mx-auto lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 py-10 gap-10 mt-2'>
                    {
                        listProducts.map((product, idx) => (
                            <Product key={idx} product={product} addToCart={addToCart} />
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default ProductList;
