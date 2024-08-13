import React from 'react'
import Image from 'next/image'

const CreateNewPage = () => {
    return (
        <div className='flex flex-col text-graydark py-4 gap-8'>
            <div className='flex gap-x-8 '>
                <Image
                    width={24}
                    height={24}
                    src={"/icon/chevron-left.svg"}
                    alt='back button'
                />
                <h2>Add page</h2>
            </div>

            <div className='mx-8'>
                <form className=''>
                    <div className='flex-row justify-end'>
                        <label htmlFor="">Page Title</label>
                        <input type='text' placeholder='terms & Services' className='sm:w-full border rounded-md border-x-body my-2  h-8' required />
                    </div>
                </form>
            </div>

            <div className='mx-8'>
                <form className=''>
                    <div>
                        <label htmlFor="">Description</label>
                        <textarea placeholder='Descriptions of the page' className='md:w-full border rounded-md border-x-body my-2' rows={6} required />
                    </div>
                </form>
            </div>


            <div className='mx-8'>
                <label htmlFor="">Status</label>
                <div className='border rounded-md border-x-body space-x-2 md:w-full h-6'>
                    <label htmlFor="">
                        <input type="radio" id="page-active" name='page' />
                        Active</label>
                    <label htmlFor="">
                        <input type="radio" id="page-disable" name='page' />
                        Disable</label>
                </div>
            </div>

            <div className='mx-8'>
                <label htmlFor="">Slung</label>
                <div>
                    <input type="text" id='slung-id' name='slung' placeholder='Enter slung is here' className='md:w-full border rounded-md border-x-body my-2 h-8' />
                </div>
            </div>

            <div className="flex items-center justify-center gap-x-8 ">

                <a className="inline-block px-39 py-3 text-sm font-medium text-danger bg-white border border-danger rounded active:text-white hover:bg-danger hover:text-white focus:outline-none focus:ring" href="/save&createsubpage">
                    Save & Create Sub-page
                </a>

                <a className="inline-block px-39 py-3 text-sm font-medium text-white bg-danger border-danger  hover:bg-white border rounded hover:border-danger  hover:text-danger active:bg-danger  active:border-danger   focus:ring" href="/savepage">
                    Save
                </a>

            </div>


        </div>
    )
}

export default CreateNewPage