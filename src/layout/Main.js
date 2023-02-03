import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Navbar from '../pages/shared/Navbar/Navbar';
import Sidebar from '../pages/shared/Sidebar/Sidebar';

const Main = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Navbar />
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-1'>
                {
                    user?.email &&
                    <div className='mt-28'>
                        <Sidebar />
                    </div>
                }
                <div className='mt-14 col-span-1 md:col-span-2 lg:col-span-4'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Main;