import React, { useContext } from 'react';
import { FiUsers, FiLogOut } from "react-icons/fi";
import { TbListDetails } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Sidebar = () => {
    const { logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(e => console.log(e))
    }
    const activeClassName = "flex items-center pl-6 py-3 gap-4 bg-primary text-white rounded-md";
    const inactiveClassName = "text-black/[.6] flex items-center pl-6 py-3 gap-4";

    return (
        <div className='mx-2 min-w-[158px]'>
            <NavLink
                to='/addStudents'
                className={({ isActive }) =>
                    isActive ? activeClassName : inactiveClassName
                }>
                <FiUsers className='w-6 h-6' />
                <p>Add Student</p>
            </NavLink>

            <NavLink
                to='/manageStudents'
                className={({ isActive }) =>
                    isActive ? activeClassName : inactiveClassName
                }>
                <TbListDetails className='w-6 h-6' />
                <p>Manage Student</p>
            </NavLink>

            <div
                onClick={handleLogOut}
                className='text-black/[.6] flex items-center pl-6 py-3 gap-4 rounded-md cursor-pointer'>
                <FiLogOut className='w-6 h-6' />
                <p>Logout</p>
            </div>
        </div>
    );
};

export default Sidebar;