import React from 'react';
import PropTypes from 'prop-types';

const Payment = ({ isCheck, setInformations, informations }) => (
    <div className={isCheck === true ? 'w-2/3 mx-auto block delay-1000' : 'w-2/3 mx-auto hidden'}>
        <form action=''>
            <div className='text-2xl font-semibold text-center text-gray-500 py-2'>
                <p>Xác nhận đặt hàng ✔✔✔</p>
            </div>
            <div>
                <div className='py-1 my-2'>
                    {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ]  */}
                    <label className='text-lg font-medium text-gray-500'>
                        Họ tên:
                        <input
                            onBlur={
                                (e) => {
                                    e.preventDefault();
                                    setInformations({ ...informations, name: e.target.value });
                                }
                            }
                            type='text'
                            name='name'
                            className='border w-80 float-right focus:outline-none rounded-md px-3 py-1'
                            placeholder='nhập họ và tên'
                        />
                    </label>
                </div>
                <div className='py-1 my-2'>
                    <label className='text-lg font-medium text-gray-500'>
                        Số điện thoại cá nhân:
                        <input
                            onBlur={
                                (e) => {
                                    e.preventDefault();
                                    setInformations({ ...informations, phone: e.target.value });
                                }
                            }
                            type='text'
                            name='phone'
                            className='border w-80 float-right focus:outline-none rounded-md px-3 py-1'
                            placeholder='nhập số điện thoại'
                        />
                    </label>
                </div>
                <div className='py-1 my-2'>
                    <label className='text-lg font-medium text-gray-500'>
                        Địa chỉ:
                        <input
                            onBlur={
                                (e) => {
                                    e.preventDefault();
                                    setInformations({ ...informations, address: e.target.value });
                                }
                            }
                            type='text'
                            name='address'
                            className='border w-80 float-right focus:outline-none rounded-md px-3 py-1'
                            placeholder='nhập địa chỉ'
                        />
                    </label>
                </div>
            </div>
            <button type='submit' className='my-3 cursor-pointer py-2 px-4 block mt-6 bg-yellow-500 text-white font-bold w-full text-center rounded'>Đặt hàng</button>
        </form>
    </div>
);

Payment.propTypes = {
    isCheck: PropTypes.bool,
    setInformations: PropTypes.func,
    informations: PropTypes.object
};

Payment.defaultProps = {
    isCheck: null,
    setInformations: null,
    informations: {}
};

export default Payment;
