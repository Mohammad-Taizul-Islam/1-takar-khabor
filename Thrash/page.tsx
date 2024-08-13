import React from 'react'
import Image from 'next/image'

const SignIn = () => {
    return (
        <div className="bg-white text-black-2">
            <div className="flex rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl w-screen h-screen">
                <div className="hidden lg:block  bg-cover w-3/4 flex-shrink-0 py-5">
                    <img
                        className='w-fit h-fit'
                        src="/images/login-bg.png"
                        alt=""
                    />
                </div>
                <div className="px-36.75 flex flex-col items-center justify-center w-1/4 flex-shrink-0">
                    <h2 className='flex flex-col items-center'>LogIn</h2>
                    <div className="mt-4">
                        <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" name='Email' placeholder='Email' />
                    </div>
                    <div className="mt-4">
                        <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" name='Password' placeholder='Password' />
                        <div className="flex justify-end">
                            <a href="#" className="text-xs text-gray-500">Forget Password?</a>
                        </div>
                    </div>
                    <div className="mt-8">
                        <button className="bg-danger text-white font-bold px-20 w-full rounded  hover:bg-gray-900">Login</button>
                    </div>
                    {/* <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        <a href="#" className="text-xs text-gray-500 uppercase">or sign up</a>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default SignIn