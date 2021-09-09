import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListProductCart = ({ item, deleteCart }) => (
    <tr>
        <td>
            <div className='flex'>
                <img src={item.image} className='lg:w-20 md:w-12 w-8 rounded' />
                <div className='ml-2'>
                    <p className='my-3 md:ml-4'>{item.name}</p>
                </div>
            </div>
        </td>
        <td className='text-center md:table-cell'>
            <span className='text-sm lg:text-base font-medium'>
                {`${item.price} VNĐ`}
            </span>
        </td>
        <td className='text-center md:justify-end md:flex mt-6'>
            <span className='text-sm lg:text-base font-medium'>
                {item.qty}
            </span>
        </td>
        <td className='hidden text-right md:table-cell'>
            <span className='text-sm lg:text-base font-medium'>
                {`${item.total} VNĐ`}
            </span>
        </td>
        <td className='text-md md:ml-3 flex text-gray-400'>
            <Link
                to='#'
                className='pr-2 hover:text-green-500'
            >
                <i className='far fa-edit' />
            </Link>
            <form
                onSubmit={() => deleteCart(item._id)}
            >
                <button type='submit' className='hover:text-red-500 border-none focus:outline-none'>
                    <i className='fas fa-times' />
                </button>
            </form>
        </td>
    </tr>
);

ListProductCart.propTypes = {
    item: PropTypes.object,
    deleteCart: PropTypes.func
};

ListProductCart.defaultProps = {
    item: {},
    deleteCart: null
};

export default ListProductCart;
