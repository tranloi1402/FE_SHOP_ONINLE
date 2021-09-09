import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Catergory from '../Category/catergory';
import '../../../../assets/styles/_class.scss';
import { categoryActions, categorySelectors } from '../../../../state/modules/category';

const Header = () => {
    const [isCheck, setIsCheck] = useState(false);
    const onClickBtn = () => {
        // console.log(isCheck);
        setIsCheck(!isCheck);
    };

    const dispatch = useDispatch();
    const listCategory = useSelector(categorySelectors.categories);

    useEffect(() => {
        dispatch(categoryActions.getAllCate());
    }, [dispatch]);

    const listCateTitle1 = listCategory.filter((cate) => cate.title === 1);
    const listCateTitle2 = listCategory.filter((cate) => cate.title === 2);

    return (
        <header className='min-w-full fixed z-30 top-0'>
            <nav className='bg-white shadow-lg'>
                <div className='container mx-auto'>
                    <div className='flex justify-between '>
                        <div className='flex space-x-7'>
                            <div className='flex justify-start sm:hidden ml-2'>
                                <button
                                    onClick={() => onClickBtn()}
                                    type='button'
                                    className='border my-3 py-3 px-4 shadow-md rounded focus:outline-none'
                                >
                                    <i className='fas fa-bars' />
                                </button>
                            </div>
                            <div>
                                {/* <!-- Website Logo --> */}
                                <a href='/trang-chu' className='flex items-center py-4 sm:px-2'>
                                    <img src='logo.png' alt='Logo' className='h-8 w-8 mr-2' />
                                    <span className='font-semibold text-gray-500 text-lg'>Shop</span>
                                </a>
                            </div>
                        </div>
                        <div className='mr-auto md:pl-4  hidden md:block'>
                            <ul className='flex h-full'>
                                <li className='text-xl tex-gray-500 font-medium px-6 hover:text-yellow-500 transition delay-100'>
                                    <a href='/trang-chu' className='line-height'>Trang chủ</a>
                                </li>
                                <li id='dropDown' className='text-xl relative tex-gray-500 font-medium px-6'>
                                    <a href='#' className='hover:text-yellow-500 transition delay-100 line-height'>Thực đơn</a>
                                    <div id='menu' className='container hidden min-w-full absolute z-10 drop-content'>
                                        <Catergory listCateTitle1={listCateTitle1} listCateTitle2={listCateTitle2} />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='sm:flex hidden my-auto ml-auto w-auto border rounded-md shadow '>
                            <i className='fas fa-search text-2xl font-extralight my-auto mx-3 text-gray-300' />
                            <div className='border-r my-2' />
                            <input type='text' className='w-full hidden md:block focus:outline-none bg-purple-white  py-2 px-4 text-lg' placeholder='Tìm kiếm...' />
                        </div>
                        <div className='flex flex-row cursor-pointer truncate p-2 px-4 rounded leading-7 mt-2'>
                            <div className='flex flex-row-reverse ml-2 w-full'>
                                <div className='relative'>
                                    <a href='/cart'>
                                        <div className='absolute text-xs rounded-full -mt-1 -mr-2 px-1 font-bold top-0 right-0 bg-red-700 text-white'>3</div>
                                        <i className='fas fa-shopping-cart text-xl' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={isCheck ? 'relative sm:hidden' : 'hidden w-full'}>
                        <h2 className='m-2 text-lg font-semibold text-gray-500 border-t pt-2'>Thực đơn</h2>
                        <div className='min-w-full mx-6'>
                            <Catergory listCateTitle1={listCateTitle1} listCateTitle2={listCateTitle2} />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
