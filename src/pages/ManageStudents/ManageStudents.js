import React, { useContext, useEffect, useState } from 'react';
import { FiEye } from "react-icons/fi";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../shared/ConfirmationModal/ConfirmationModal';

const ManageStudents = () => {
    const { user } = useContext(AuthContext);
    const [deletingStudent, setDeletingStudent] = useState(null);

    //current time update
    const loadDate = format(new Date(), "dd LLL yyyy HH:mm");
    const [date, setDate] = useState(loadDate)
    useEffect(() => {
        const currentDate = setInterval(() => setDate(format(new Date(), "dd LLL yyyy HH:mm")), 1000);
        return function cleanup() {
            clearInterval(currentDate);
        };
    }, []);

    //get student data
    const { data: students = [], refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://student-manage-server-siamcse.vercel.app/students?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });
    //delete student
    const handleDeleteStudent = student => {
        console.log(student);
        fetch(`https://student-manage-server-siamcse.vercel.app/students/${student._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Student Deleted successfull');
                    refetch();
                }
            })
    }

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
                            {
                                students.map(student => <tr key={student._id} className="bg-primary flex flex-col flex-nowrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                    <th className="p-3 text-left">Name</th>
                                    <th className="p-3 text-left">Class</th>
                                    <th className="p-3 text-left">Roll No.</th>
                                    <th className="p-3 text-left">View / Edit / Delete</th>
                                </tr>)
                            }
                        </thead>
                        <tbody className="flex-1 sm:flex-none">
                            {
                                students.map(student => <tr key={student._id} className="flex flex-col flex-nowrap sm:table-row mb-2 sm:mb-0">
                                    <td className="border-grey-light border hover:bg-gray-100 p-3">
                                        {student.fName} {student.mName} {student.lName}
                                    </td>
                                    <td className="border-grey-light border hover:bg-gray-100 p-3">{student.presentClass}-{student.division}</td>
                                    <td className="border-grey-light border hover:bg-gray-100 p-3">{student.roll}</td>
                                    <td className="border-grey-light border hover:bg-gray-100 p-3 flex gap-8 text-primary">
                                        <Link to={`/view/${student._id}`}><FiEye className='w-6 h-6' /></Link>
                                        <Link to={`/edit/${student._id}`}><BiEditAlt className='w-6 h-6' /></Link>
                                        <label htmlFor="popup-modal" className="cursor-pointer"
                                            onClick={() => setDeletingStudent(student)}>
                                            <RiDeleteBin6Line className='w-6 h-6' />
                                        </label>
                                    </td>

                                    {/* <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer"><label htmlFor="popup-modal" className="cursor-pointer">
                                    {/* <RiDeleteBin6Line className='text-red-600 text-2xl' /> */}
                                    {/* </label></td> */}
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {
                deletingStudent && <ConfirmationModal
                    title={'Are You sure to delete?'}
                    message={`You are deleting student: ${deletingStudent.fName} ${deletingStudent.lName}`}
                    successModal={handleDeleteStudent}
                    modalData={deletingStudent}
                    closeModal={setDeletingStudent}
                    action={'Delete'}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageStudents;