import React from "react";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import Image from 'next/image';

const AdminManagement = () => {
    return (
        <>
            <div className="overflow-hidden rounded-sm border sm:w-full h-screen border-stroke bg-white shadow-default text-black mx-8">
                <Breadcrumb pageName="AdminManagement" />
                <div className="">
                    <div className="h-9.25 lg:w-full mx-10 my-2 font-bold">
                        <h1 >Admin Management</h1>
                    </div>

                    <div className="flex flex-col md:flex-row gap-3 mx-8 items-center justify-center ">
                        <button className="underline-offset-2 text-graydark border-b-2">
                            Admin List
                        </button>
                        <button>
                            Roll Manage
                        </button>
                    </div>


                    <div className="md:w-full">
                        <form className="flex flex-row gap-3 mx-8 my-4 items-center">
                            <div className="flex w-4/5 relative">
                                <input
                                    className="md:w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    type="search"
                                    placeholder="Search"
                                />
                                <button className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                    <Image src={"/icon/search.svg"} alt={"search"} width={24} height={24} />
                                </button>
                            </div>
                            <div className="flex w-1/5 h-10 border-2 border-danger text-danger focus:outline-none focus:border-dange hover:bg-danger hover:text-white rounded px-0 md:px-3 py-0 md:py-1 tracking-wider items-center justify-center">
                                {/* Replace the text with an SVG or Image component */}

                                <Image src={"/icon/plus.svg"} alt={"plus"} width={24} height={24} />
                                <label htmlFor="">Add Admin</label>
                            </div>
                        </form>
                    </div>



                    <div className="flex items-center justify-center  my-5 mx-8">
                        <table className="min-w-full table-auto">
                            <thead className="bg-secondary rounded-md">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-purple-300  tracking-wider">
                                        User ID
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-purple-300  tracking-wider">
                                        Type
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-purple-300  tracking-wider">
                                        Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-purple-300  tracking-wider">
                                        Role Permitted
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-purple-300  tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-purple-300  tracking-wider">
                                        More
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">0145</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        Owner
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap gap-x-4">Radid Kims</td>
                                    <td className="px-6 py-4 whitespace-nowrap gap-x-4">Owner</td>
                                    <td className="px-6 py-4 whitespace-nowrap gap-x-4">Active</td>
                                    <td className="px-6 py-4 whitespace-nowrap gap-x-4">
                                        {
                                            <div>
                                                <Image src={"/icon/more-vertical.svg"} alt={"more"} width={24} height={24} />
                                            </div>
                                        }
                                    </td>
                                </tr>

                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">0567</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        Super Admin
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap gap-x-4">Krist Thomas</td>
                                    <td className="px-6 py-4 whitespace-nowrap gap-x-4">All Access</td>
                                    <td className="px-6 py-4 whitespace-nowrap gap-x-4">Active</td>
                                    <td className="px-6 py-4 whitespace-nowrap gap-x-4">
                                        {
                                            <div>
                                                <Image src={"/icon/more-vertical.svg"} alt={"more"} width={24} height={24} />
                                            </div>
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminManagement;
