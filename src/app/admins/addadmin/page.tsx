import React from 'react'
import Image from 'next/image'

const AddAdmin = () => {
    return (
        <div className='flex flex-col text-graydark'>
            <div className='flex gap-x-8  my-2 font-bold'>
                <Image
                    width={24}
                    height={24}
                    src={"/icon/chevron-left.svg"}
                    alt='back button'
                />
                <h2>Add Admin</h2>
            </div>

            <div className='mx-8'>
                <form className=''>
                    <div className='relative'>
                        <label htmlFor="">User Role</label>
                        <div className='relative'>
                            <input
                                type='text'
                                placeholder='Select User Role'
                                className='sm:w-full border rounded-md border-x-body my-2 h-8' // Add padding for the icon
                                required
                            />
                            <Image
                                src={'/icon/chevron-down.svg'}
                                alt={'checker'}
                                className='absolute top-1/2 transform -translate-y-1/2 right-2' // Position the icon absolutely
                                width={24}
                                height={24}
                            />
                        </div>
                    </div>
                </form>
            </div>

            <div className='mx-8'>
                <form className=''>
                    <div className='flex-row justify-end'>
                        <label htmlFor="">First Name</label>
                        <input type='text' placeholder='Enter first name ' className='sm:w-full border rounded-md border-x-body my-2  h-8' required />
                    </div>
                </form>
            </div>
            <div className='mx-8'>
                <form className=''>
                    <div className='flex-row justify-end'>
                        <label htmlFor="">Last Name</label>
                        <input type='text' placeholder='Enter last name ' className='sm:w-full border rounded-md border-x-body my-2  h-8' required />
                    </div>
                </form>
            </div>

            <div className='mx-8'>
                <form className=''>
                    <div className='flex-row justify-end'>
                        <label htmlFor="">User Name</label>
                        <input type='text' placeholder='Enter user name ' className='sm:w-full border rounded-md border-x-body my-2  h-8' required />
                    </div>
                </form>
            </div>

            <div className='mx-8'>
                <form className=''>
                    <div className='flex-row justify-end'>
                        <label htmlFor="">Email</label>
                        <input type='text' placeholder='Enter email ' className='sm:w-full border rounded-md border-x-body my-2  h-8' required />
                    </div>
                </form>
            </div>

            <div className='mx-8'>
                <form className=''>
                    <div className='flex-row justify-end'>
                        <label htmlFor="">Phone</label>
                        <input type='text' placeholder='Enter phone number ' className='sm:w-full border rounded-md border-x-body my-2  h-8' required />
                    </div>
                </form>
            </div>
            <div className='mx-8'>
                <form className=''>
                    <div className='flex-row justify-end'>
                        <label htmlFor="">Address</label>
                        <input type='text' placeholder='Enter address ' className='sm:w-full border rounded-md border-x-body my-2  h-8' required />
                    </div>
                </form>
            </div>
            <div className='mx-8'>
                <form className=''>
                    <div className='flex-row justify-end'>
                        <label htmlFor="">Password</label>
                        <input type='text' placeholder='Enter password ' className='sm:w-full border rounded-md border-x-body my-2  h-8' required />
                    </div>
                </form>
            </div>
            <div className='mx-8'>
                <form className=''>
                    <div className='flex-row justify-end'>
                        <label htmlFor="">Confirm Password</label>
                        <input type='text' placeholder='Enter confirm password ' className='sm:w-full border rounded-md border-x-body my-2  h-8' required />
                    </div>
                </form>
            </div>



            <div className="flex items-center justify-center mx-8 my-8 ">

                <a className="inline-block px-39 py-3 text-sm font-medium text-white bg-danger border-danger  hover:bg-white border rounded hover:border-danger  hover:text-danger active:bg-danger  active:border-danger   focus:ring" href="/savepage">
                    + Add
                </a>

            </div>


        </div>
    )
}

export default AddAdmin