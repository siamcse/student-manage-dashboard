import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const EditPage = () => {
    const student = useLoaderData();
    const [tempStudent, setTempStudent] = useState(student);
    const { user } = useContext(AuthContext);

    const loadDate = format(new Date(), "dd LLL yyyy HH:mm");
    const [date, setDate] = useState(loadDate)
    useEffect(() => {
        const currentDate = setInterval(() => setDate(format(new Date(), "dd LLL yyyy HH:mm")), 1000);
        return function cleanup() {
            clearInterval(currentDate);
        };
    }, []);
    const handleEditStudent = e => {
        e.preventDefault();

        const studentData = {
            ...tempStudent,
            userEmail: user?.email,
            userName: user?.displayName
        }
        delete studentData._id;
        console.log(studentData);

        fetch(`https://student-manage-server-siamcse.vercel.app/students/${student._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(studentData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Student data edited successfully.');
                    e.target.reset();
                }
            })
    }
    const handleOnChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setTempStudent({ ...tempStudent, [name]: value });
    }
    return (
        <div className='md:mr-5 mx-3'>
            <div className='flex justify-between'>
                <p>Edit Students</p>
                <p>{date}</p>
            </div>
            <form onSubmit={handleEditStudent} className='my-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <input type="text" name='fName' value={tempStudent.fName} className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]' onChange={handleOnChange} placeholder='First Name' required />
                    <input type="text" name='mName' value={tempStudent.mName}
                        className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]' onChange={handleOnChange} placeholder='Middle Name' />
                    <input type="text" name='lName' value={tempStudent.lName} className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]' onChange={handleOnChange} placeholder='Last Name' required />
                    <select value={tempStudent.presentClass}
                        name='presentClass' className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]' onChange={handleOnChange} placeholder='Select Class' required>
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
                    <select value={tempStudent.division}
                        name='division' className=' py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]' onChange={handleOnChange} placeholder='Select Class' required>
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
                        value={tempStudent.roll}
                        onInput={(e) => e.target.value = e.target.value.slice(0, 2)}
                        required
                        className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]'
                        onChange={handleOnChange} placeholder='Enter Roll Number in Digits'
                    />
                </div>
                <div className='grid grid-cols-2 gap-4 mt-12'>
                    <textarea type="text" name='address1' value={tempStudent.address1} className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]' onChange={handleOnChange} placeholder='Address Line 1' required />
                    <textarea type="text" name='address2' value={tempStudent.address2} className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]' onChange={handleOnChange} placeholder='Address Line 2' required />
                </div>
                <div className='grid grid-cols-3 gap-4 mt-4'>
                    <input type="text" name='landmark' value={tempStudent.landmark} className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]' onChange={handleOnChange} placeholder='Landmark' required />
                    <input type="text" name='city' value={tempStudent.city} className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]' onChange={handleOnChange} placeholder='City' required />
                    <input
                        type="number"
                        name='pincode'
                        value={tempStudent.pincode}
                        onInput={(e) => e.target.value = e.target.value.slice(0, 6)}
                        required
                        className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]'
                        onChange={handleOnChange} placeholder='Pincode'
                    />
                </div>
                <input type='submit' className='btn text-white px-6 md:px-24 py-4 bg-primary mt-8 rounded-md hover:bg-red-600' value="Save" />
            </form>
        </div>
    );
};

export default EditPage;