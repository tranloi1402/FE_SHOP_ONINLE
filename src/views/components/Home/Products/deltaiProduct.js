import React from 'react';

const deltaiProduct = () => (
    <div className='container mx-auto px-6 py-10 md:mt-16 mt-16'>
        <div className='md:flex md:items-center'>
            <div className='w-full h-64 md:w-1/2 lg:h-96'>
                <img className='h-full w-full rounded-md object-cover max-w-lg mx-auto' src='https://images.unsplash.com/photo-1578262825743-a4e402caab76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80' alt='Nike Air' />
            </div>
            <div className='w-full md:px-12 max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2'>
                <h1 className='text-gray-700 uppercase py-2 font-bold text-5xl'>Name</h1>
                <h1 className='text-gray-700 uppercase py-2 font-medium text-3xl'>Description</h1>
                <span className='text-gray-500 mt-3 text-xl'>Giá: 125000 VĐN</span>
                <div className='my-3'>
                    <div className='mt-2'>
                        <div className='flex items-center mt-1'>
                            <span className='text-gray-700 text-lg pr-5' htmlFor='count'>Số lượng: </span>
                            <button type='button' className='text-gray-500 focus:outline-none focus:text-gray-600'>
                                <svg className='h-5 w-5' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor'><path d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' /></svg>
                            </button>
                            <span className='text-gray-700 text-lg mx-2'>20</span>
                            <button type='button' className='text-gray-500 focus:outline-none focus:text-gray-600'>
                                <svg className='h-5 w-5' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor'><path d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' /></svg>
                            </button>
                        </div>
                        <div className='flex item-center mt-2 py-3'>
                            <svg className='w-5 h-5 fill-current text-gray-700' viewBox='0 0 24 24'>
                                <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                            </svg>
                            <svg className='w-5 h-5 fill-current text-gray-700' viewBox='0 0 24 24'>
                                <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                            </svg>
                            <svg className='w-5 h-5 fill-current text-gray-700' viewBox='0 0 24 24'>
                                <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                            </svg>
                            <svg className='w-5 h-5 fill-current text-gray-500' viewBox='0 0 24 24'>
                                <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                            </svg>
                            <svg className='w-5 h-5 fill-current text-gray-500' viewBox='0 0 24 24'>
                                <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                            </svg>
                        </div>
                    </div>
                    <div className='flex items-center mt-6'>
                        <button type='button' className='px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500'>Đặt hàng</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default deltaiProduct;
