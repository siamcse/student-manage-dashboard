import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar/Navbar';
import Sidebar from '../pages/shared/Sidebar/Sidebar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className='grid grid-cols-5 gap-1'>
                <div className='mt-28'>
                    <Sidebar />
                </div>
                <div className='mt-14 col-span-4'>
                    <Outlet />
                </div>
            </div>
            
            
        </div>
    );
};

export default Main;