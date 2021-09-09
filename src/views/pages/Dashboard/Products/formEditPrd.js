import React from 'react';
import PropTypes from 'prop-types';

import '../../../../assets/styles/_class.scss';

const FormEditPrd = ({ data, categorys }) => (
    <div className='h-full ml-14 mt-14 mb-10 md:ml-64'>
        <div>
            <h2 className='ml-6 mt-4 text-xl font-semibold text-gray-500'>Chỉnh sửa thông tin sản phẩm</h2>
        </div>
        <div className='m-10 p-2 bg-white border rounded-xl shadow-2xl z-10'>
            <form action=''>
                <div className='grid sm:grid-cols-1 lg:grid-cols-2 px-5 gap-3'>
                    <div className='py-1 my-2'>
                        {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ]  */}
                        <label className='text-lg font-medium text-gray-500'>
                            Tên sản phẩm:
                            <input
                                type='text'
                                name='name'
                                className='border w-80 mx-2 focus:outline-none rounded-md px-3 py-1'
                                placeholder={data.name ? `${data.name}` : 'nhập tên sản phẩm'}
                            />
                        </label>
                    </div>
                    <div className='py-1 my-2'>
                        <label className='text-lg font-medium text-gray-500'>
                            Thể loại:
                            <select
                                name='categoryID'
                                id='categoryID'
                                className='border w-80 mx-2 focus:outline-none rounded-md px-3 py-1'
                            >
                                {/* {
                                    categorys.find(
                                        (data.categoryID === categorys._id)
                                            ? <option value={categorys._id}>{categorys.name}</option> : <option>----  Chọn trạng thái  ----</option>
                                    )
                                } */}
                                {
                                    categorys.map(
                                        (cate, index) => <option key={index} value={cate._id}>{cate.name}</option>
                                    )
                                }
                            </select>
                        </label>
                    </div>
                    <div className='py-1 my-2'>
                        <label className='text-lg font-medium text-gray-500'>
                            Mô tả:
                            <textarea
                                type='text'
                                name='description'
                                className='border w-80 mx-2 focus:outline-none rounded-md px-3 py-1'
                                placeholder={data.description ? `${data.description}` : 'nhập mô tả'}
                            />
                        </label>
                    </div>
                    <div className='py-1 my-2'>
                        <label className='text-lg font-medium text-gray-500'>
                            Trạng thái:
                            <select name='status' id='status' className='border w-80 mx-2 focus:outline-none rounded-md px-3 py-1'>
                                {/* {
                                    data.status
                                        ? <option value={data.status}>{data.status}</option>
                                        : <option>----  Chọn trạng thái  ----</option>
                                } */}
                                <option>----  Chọn trạng thái  ----</option>
                                <option value='Đang bán'>Đang bán</option>
                                <option value='Bán chạy'>Bán chạy</option>
                                <option value='Dừng bán'>Dừng bán</option>
                            </select>
                        </label>
                    </div>
                    <div className='py-1 my-2'>
                        <label className='text-lg font-medium text-gray-500'>
                            Giá:
                            <input
                                type='text'
                                name='price'
                                className='border w-80 mx-2 focus:outline-none rounded-md px-3 py-1'
                                placeholder={data.price ? `${data.price}` : 'null'}
                            />
                        </label>
                    </div>
                    <div className='py-1 my-2'>
                        <label className='text-lg font-medium text-gray-500'>
                            Ảnh sản phẩm:
                            <input type='file' name='image' accept='.png, .jpg, .jpeg' />
                            <img src={data.image} alt='ảnh sản phẩm' />
                        </label>
                    </div>
                </div>
                <button type='submit' className='cursor-pointer py-2 px-4 block mx-6 my-3 text-white font-bold text-center rounded add'>Cập nhập</button>
            </form>
        </div>
    </div>
);

FormEditPrd.propTypes = {
    data: PropTypes.object,
    categorys: PropTypes.object
};

FormEditPrd.defaultProps = {
    data: {},
    categorys: {}
};

export default FormEditPrd;
