import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const ViewPage = () => {
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
                <p>View Students</p>
                <p>{date}</p>
            </div>
            <div className='my-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <input type="text" name='fname' value='Abu Siam' readOnly className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]' placeholder='First Name' required />
                    <input type="text" name='mname' className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]' placeholder='Middle Name' />
                    <input type="text" name='lname' className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]' placeholder='Last Name' required />
                    <select defaultValue="Select Class"
                        name='class' className='text-gray-500 py-4 px-4 rounded-md focus:outline-none focus:text-black shadow-[0_0_3px_rgba(0,0,0,0.2)]' placeholder='Select Class' required>
                        <option>Select Class</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>
                    <select defaultValue="Select Division"
                        name='division' className='text-gray-500 py-4 px-4 rounded-md focus:outline-none focus:text-black shadow-[0_0_3px_rgba(0,0,0,0.2)]' placeholder='Select Class' required>
                        <option>Select Division</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                        <option>E</option>
                    </select>

                    <input
                        type="number"
                        name='roll'
                        onInput={(e) => e.target.value = e.target.value.slice(0, 2)}
                        required
                        className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]'
                        placeholder='Enter Roll Number in Digits'
                    />
                </div>
                <div className='grid grid-cols-2 gap-4 mt-12'>
                    <textarea type="text" name='address1' className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]' placeholder='Address Line 1' required />
                    <textarea type="text" name='address2' className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]' placeholder='Address Line 2' required />
                </div>
                <div className='grid grid-cols-3 gap-4 mt-4'>
                    <input type="text" name='landmark' className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]' placeholder='Landmark' required />
                    <input type="text" name='city' className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]' placeholder='City' required />
                    <input
                        type="number"
                        name='pincode'
                        onInput={(e) => e.target.value = e.target.value.slice(0, 6)}
                        required
                        className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]'
                        placeholder='Pincode'
                    />
                </div>
            </div>
            
        </div>
    );
};

export default ViewPage;