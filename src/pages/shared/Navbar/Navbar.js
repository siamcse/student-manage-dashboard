import React, { useContext } from 'react';
import { FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Navbar = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='flex justify-between'>
            <div className='ml-4 md:ml-16 mt-4 w-36 h-9'>
                <Link to='/' className='text-[32px] font-bold text-[#584A4ABD] uppercase'>Logo</Link>
            </div>
            <div className='flex items-center border bottom-1 px-4 md:px-16 py-3 mt-6 mr-4 md:mr-20 shadow-[0_0_3px_rgba(0,0,0,0.2)]'>
                <FiUser className='text-2xl' />
                <p className='pl-5 text-sm hidden md:block'>{user?.email}</p>
            </div>
        </div>
    );
};

export default Navbar;