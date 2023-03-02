import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewPage = () => {
    const student = useLoaderData();
    const { fName, mName, lName, presentClass, roll, division, address1, address2, landmark, pincode, city } = student;

    //time update
    const loadDate = format(new Date(), "dd LLL yyyy HH:mm");
    const [date, setDate] = useState(loadDate)
    useEffect(() => {
        const currentDate = setInterval(() => setDate(format(new Date(), "dd LLL yyyy HH:mm")), 1000);
        return function cleanup() {
            clearInterval(currentDate);
        };
    }, []);
    console.log(student);
    return (
        <div className='md:mr-5 mx-3'>
            <div className='flex justify-between'>
                <p>View Students</p>
                <p>{date}</p>
            </div>
            <div className='my-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <input type="text" name='fname' value={fName} readOnly className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]' placeholder='First Name' />
                    <input type="text" name='mname' value={mName} className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]' placeholder='Middle Name' readOnly />
                    <input type="text" name='lname' value={lName} className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]' placeholder='Last Name' readOnly />
                    <input value={presentClass}
                        name='class' className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]' placeholder='Select Class' readOnly />
                    <input value={division}
                        name='class' className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]' placeholder='Select Class' readOnly />

                    <input
                        type="number"
                        name='roll'
                        value={roll}
                        onInput={(e) => e.target.value = e.target.value.slice(0, 2)}

                        className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]'
                        placeholder='Enter Roll Number in Digits'
                        readOnly
                    />
                </div>
                <div className='grid grid-cols-2 gap-4 mt-12'>
                    <textarea type="text" name='address1' value={address1} className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]' placeholder='Address Line 1' readOnly />
                    <textarea type="text" name='address2' value={address2} className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]' placeholder='Address Line 2' readOnly />
                </div>
                <div className='grid grid-cols-3 gap-4 mt-4'>
                    <input type="text" name='landmark' value={landmark} className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]' placeholder='Landmark' readOnly />
                    <input type="text" name='city' value={city} className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]' placeholder='City' readOnly />
                    <input
                        type="number"
                        name='pincode'
                        value={pincode}
                        onInput={(e) => e.target.value = e.target.value.slice(0, 6)}

                        className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]'
                        placeholder='Pincode'
                        readOnly
                    />
                </div>
            </div>

        </div>
    );
};

export default ViewPage;