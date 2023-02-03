import React, { useEffect, useState } from 'react';
import { FiEye } from "react-icons/fi";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const ManageStudents = () => {
    const loadDate = format(new Date(), "dd LLL yyyy HH:mm");
    const [date, setDate] = useState(loadDate)
    useEffect(() => {
        const currentDate = setInterval(() => setDate(format(new Date(), "dd LLL yyyy HH:mm")), 1000);
        return function cleanup() {
            clearInterval(currentDate);
        };
    }, []);

    return (
        <div className='md:mr-5 mx-3'>
            <div className='flex justify-between'>
                <p>Manage Students</p>
                <p>{date}</p>
            </div>
            <div className="flex items-center justify-center my-8">
                <div className="container">
                    <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-md overflow-hidden sm:shadow-lg">
                        <thead className="text-white">
                            <tr className="bg-primary flex flex-col flex-nowrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                <th className="p-3 text-left">Name</th>
                                <th className="p-3 text-left">Class</th>
                                <th className="p-3 text-left">Roll No.</th>
                                <th className="p-3 text-left">View / Edit / Delete</th>
                            </tr>
                        </thead>
                        <tbody className="flex-1 sm:flex-none">
                            <tr className="flex flex-col flex-nowrap sm:table-row mb-2 sm:mb-0">
                                <td className="border-grey-light border hover:bg-gray-100 p-3">Bruce Banner</td>
                                <td className="border-grey-light border hover:bg-gray-100 p-3">VI-A</td>
                                <td className="border-grey-light border hover:bg-gray-100 p-3">12</td>
                                <td className="border-grey-light border hover:bg-gray-100 p-3 flex gap-8 text-primary">
                                    <Link to='/view'><FiEye className='w-6 h-6' /></Link>
                                    <Link to='/edit'><BiEditAlt className='w-6 h-6' /></Link>
                                    <Link to=''><RiDeleteBin6Line className='w-6 h-6' /></Link>
                                </td>

                                {/* <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer"><label htmlFor="popup-modal" className="cursor-pointer">
                                    {/* <RiDeleteBin6Line className='text-red-600 text-2xl' /> */}
                                {/* </label></td> */}
                            </tr>
                            <tr className="flex flex-col flex-nowrap sm:table-row mb-2 sm:mb-0">
                                <td className="border-grey-light border hover:bg-gray-100 p-3">Bruce Banner</td>
                                <td className="border-grey-light border hover:bg-gray-100 p-3">VI-A</td>
                                <td className="border-grey-light border hover:bg-gray-100 p-3">12</td>
                                <td className="border-grey-light border hover:bg-gray-100 p-3 flex gap-8 text-primary">
                                    <button><FiEye className='w-6 h-6' /></button>
                                    <button><BiEditAlt className='w-6 h-6' /></button>
                                    <button><RiDeleteBin6Line className='w-6 h-6' /></button>
                                </td>

                                {/* <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer"><label htmlFor="popup-modal" className="cursor-pointer">
                                    {/* <RiDeleteBin6Line className='text-red-600 text-2xl' /> */}
                                {/* </label></td> */}
                            </tr>
                            <tr className="flex flex-col flex-nowrap sm:table-row mb-2 sm:mb-0">
                                <td className="border-grey-light border hover:bg-gray-100 p-3">Bruce Banner</td>
                                <td className="border-grey-light border hover:bg-gray-100 p-3">VI-A</td>
                                <td className="border-grey-light border hover:bg-gray-100 p-3">12</td>
                                <td className="border-grey-light border hover:bg-gray-100 p-3 flex gap-8 text-primary">
                                    <button><FiEye className='w-6 h-6' /></button>
                                    <button><BiEditAlt className='w-6 h-6' /></button>
                                    <button><RiDeleteBin6Line className='w-6 h-6' /></button>
                                </td>

                                {/* <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer"><label htmlFor="popup-modal" className="cursor-pointer">
                                    {/* <RiDeleteBin6Line className='text-red-600 text-2xl' /> */}
                                {/* </label></td> */}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageStudents;