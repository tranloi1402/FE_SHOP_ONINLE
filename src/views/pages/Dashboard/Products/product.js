import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Product = ({ product }) => (
    <tr className='border-b border-gray-200 hover:bg-gray-100'>
        <td className='py-3 px-6 text-left whitespace-nowrap'>
            <div className='flex items-center'>
                <div className='mr-3'>
                    <img
                        src={`${product.image}`}
                        alt='anh sp'
                        className='h-12 w-12'
                    />
                </div>
                <span className='font-medium'>{product.name}</span>
            </div>
        </td>
        <td className='py-3 px-6 text-left'>
            <div className='flex items-center'>
                <span>{`${product.price} VNĐ`}</span>
            </div>
        </td>
        <td className='py-3 px-6 text-center'>
            <span className='bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs'>
                {product.status}
            </span>
        </td>
        <td className='py-3 px-6 text-center'>
            <div className='flex item-center justify-center'>
                <div className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110'>
                    <Link to={`/dashboard/editProducts/${product._id}`}>
                        <i className='far fa-edit' />
                    </Link>
                </div>
                <div className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110'>
                    <Link to={`/dashboard/product/delete/${product._id}`}>
                        <i className='fas fa-trash' />
                    </Link>
                </div>
            </div>
        </td>
    </tr>
);

Product.propTypes = {
    product: PropTypes.object
};

Product.defaultProps = {
    product: {}
};

export default Product;
