import React from 'react';
import PropTypes from 'prop-types';

const InfProducts = ({ item }) => (
    <tr className='border-b border-gray-200 hover:bg-gray-100'>
        <td className='py-3 px-6 text-left whitespace-nowrap'>
            <div className='flex items-center'>
                <div className='mr-2'>
                    <img src={item.image} alt='anh sp' />
                    {/* size anh className='w-8 h-8' */}
                </div>
                <span className='font-medium'>{item.name}</span>
            </div>
        </td>
        <td className='py-3 px-6 text-left'>
            <div className='flex items-center'>
                <span>{`${item.price} VNĐ`}</span>
            </div>
        </td>
        <td className='py-3 px-6 text-center'>
            <div className='flex justify-center'>
                <span>{item.quantity}</span>
            </div>
        </td>
        <td className='py-3 px-6 text-center'>
            <div className='flex justify-center'>
                <span>{`${item.total} VNĐ`}</span>
            </div>
        </td>
    </tr>
);

InfProducts.propTypes = {
    item: PropTypes.object
};

InfProducts.defaultProps = {
    item: {}
};

export default InfProducts;
