import React from 'react';
import PropTypes from 'prop-types';

import '../../../assets/styles/_class.scss';

const Header = ({ onClickBtn }) => (
    <div className='fixed w-full flex items-center justify-between h-14 text-white z-10 bg-navigation'>
        <div className='flex justify-start sm:hidden mx-2'>
            <button
                onClick={() => onClickBtn()}
                type='button'
                className='border py-1 px-2 border-gray-700 rounded focus:outline-none'
            >
                <i className='fas fa-bars' />
            </button>
        </div>
        <div className='flex sm:items-center ml-16 sm:mx-auto pl-3 h-14 border-none w-64 justify-center'>
            <img src='logo.png' alt='Logo Shop' className='my-auto' />
        </div>
        <div className='flex justify-between items-center w-full h-14'>
            <div className=' border-l-2 border-white px-2 sm:px-8' />
            <div className='bg-white rounded hidden sm:flex items-center w-full max-w-xl p-2 shadow-sm border border-gray-200 mr-auto'>
                <button type='submit' className='outline-none focus:outline-none'>
                    <svg className='w-5 text-gray-600 h-5 cursor-pointer' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' stroke='currentColor' viewBox='0 0 24 24'>
                        <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                    </svg>
                </button>
                <input type='text' name='search' id='search' placeholder='Search' className='w-full pl-4 text-sm text-black outline-none focus:outline-none bg-transparent' />
            </div>
            <ul className='flex items-center'>
                <li>
                    <a href='#' className='flex items-center mx-4 hover:text-blue-100'>
                        <span className='sm:inline-flex px-2 hidden '>
                            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1' /></svg>
                        </span>
                        Đăng xuất
                    </a>
                </li>
            </ul>
        </div>
    </div>
);

Header.propTypes = {
    onClickBtn: PropTypes.func
};

Header.defaultProps = {
    onClickBtn: {}
};

export default Header;
