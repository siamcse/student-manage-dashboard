import React, { useContext, useEffect, useState } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';

const AddStudents = () => {
    const { user } = useContext(AuthContext);

    const loadDate = format(new Date(), "dd LLL yyyy HH:mm");
    const [date, setDate] = useState(loadDate)
    useEffect(() => {
        const currentDate = setInterval(() => setDate(format(new Date(), "dd LLL yyyy HH:mm")), 1000);
        return function cleanup() {
            clearInterval(currentDate);
        };
    }, []);

    const handleAddStudent = (e) => {
        e.preventDefault();
        const form = e.target;
        const fName = form.fname.value;
        const mName = form.mname.value;
        const lName = form.lname.value;
        const presentClass = form.class.value;
        const division = form.division.value;
        const roll = Number(form.roll.value);
        const address1 = form.address1.value;
        const address2 = form.address2.value;
        const landmark = form.landmark.value;
        const city = form.city.value;
        const pincode = Number(form.pincode.value);

        const studentData = {
            fName,
            mName,
            lName,
            presentClass,
            division,
            roll,
            address1,
            address2,
            landmark,
            city,
            pincode,
            userEmail: user?.email,
            userName: user?.displayName
        }
        console.log(studentData);

        fetch('https://student-manage-server-siamcse.vercel.app/students', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(studentData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Student added successfully.');
                    e.target.reset();
                }
            })
    }
    return (
        <div className='md:mr-5 mx-3'>
            <div className='flex justify-between'>
                <p>Add Students</p>
                <p>{date}</p>
            </div>
            <form onSubmit={handleAddStudent} className='my-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <input type="text" name='fname' className='py-4 px-4 rounded-md focus:outline-none shadow-[0_0_3px_rgba(0,0,0,0.2)]' placeholder='First Name' required />
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
                <input type='submit' className='btn text-white px-6 md:px-24 py-4 bg-primary mt-8 rounded-md hover:bg-red-600' value="Add Student" />
            </form>
        </div>
    );
};

export default AddStudents;