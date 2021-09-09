import React from 'react';

import '../../../../assets/styles/_class.scss';

import bgLogin from '../../../../assets/image/bg/bg-2.jpg';

const Login = () => (
    <div className='bg-no-repeat bg-cover bg-center relative' Style={`background-image: url(${bgLogin})`}>
        <div className='min-h-screen sm:flex sm:flex-row mx-0 justify-center'>
            <div className='flex justify-center my-auto text-white'>
                <div className=''>
                    <div className='my-5 text-center'>
                        <div className='flex justify-center py-3'>
                            <img src='logo.png' alt='Logo' className='' />
                        </div>
                        <div>
                            <h2>Đăng nhập vào Admin</h2>
                            <p>Nhập thông tin chi tiết của bạn để đăng nhập vào tài khoản của bạn.</p>
                        </div>
                    </div>
                    <div className='p-8'>
                        <form action=''>
                            <div className='py-1 my-2 flex justify-center text-black'>
                                <input type='text' name='email' className='border w-80 mx-5  focus:outline-none rounded-2xl px-3 py-1' placeholder='Email' />
                            </div>
                            <div className='py-1 my-2 flex justify-center text-black'>
                                <input type='password' name='password' className='border w-80 mx-5  focus:outline-none rounded-2xl px-3 py-1' placeholder='Password' />
                            </div>
                            <div className='flex justify-center'>
                                <button type='submit' className='my-3 cursor-pointer py-2 px-4 mt-6 bg-yellow-500 text-white font-bold text-center rounded-xl'>Đăng Nhập</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Login;
