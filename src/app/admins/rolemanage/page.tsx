import React from 'react'
import Image from 'next/image'

const RoleManage = () => {
    return (
        <div className='flex flex-col text-graydark mx-8 space-y-6 font-bold'>
            <div className='flex gap-x-8 '>
                <Image
                    width={24}
                    height={24}
                    src={"/icon/chevron-left.svg"}
                    alt='back button'
                />
                <h2>Role Manage</h2>
            </div>



            <div className='mx-8 space-y-6'>
                <form className=''>
                    <div className='relative font-semibold'>
                        <label htmlFor="">User Name/ID</label>
                        <div className='relative'>
                            <input
                                type='text'
                                placeholder='Select user name'
                                className='sm:w-full border rounded-md border-x-body h-8' // Add padding for the icon
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


            <div className='mx-8 space-y-6'>
                <form className=''>
                    <div className='relative font-semibold'>
                        <label htmlFor="">User Role</label>
                        <div className='relative'>
                            <input
                                type='text'
                                placeholder='Select Create User Role'
                                className='sm:w-full border rounded-md border-x-body h-8' // Add padding for the icon
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

            <div className='mx-8 space-y-6'>
                <span>Permissions</span>
            </div>


            <div className="flex items-center justify-center mx-8 my-8 ">

                <a className="inline-block px-39 py-3 text-sm font-medium text-white bg-danger border-danger  hover:bg-white border rounded hover:border-danger  hover:text-danger active:bg-danger  active:border-danger   focus:ring" href="/savepage">
                    + Add
                </a>

            </div>


        </div>
    )
}

export default RoleManage