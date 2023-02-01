import React from 'react';
import { FiUser } from "react-icons/fi";

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <div className='ml-16 mt-4 w-36 h-9'>
                <h1 className='text-[32px] font-bold text-[#584A4ABD] uppercase'>Logo</h1>
            </div>
            <div className='flex items-center border bottom-1 px-16 py-3 mt-6 mr-20 shadow-[0_0_3px_rgba(0,0,0,0.2)]'>
                <FiUser className='text-2xl' />
                <p className='pl-5 text-sm'>username@resoluteai.in</p>
            </div>
        </div>
    );
};

export default Navbar;