import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';




const WorkSheet = () => {
    const [date, setDate] = useState(new Date());
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const handleSubmit = async e => {
        e.preventDefault()
        const form = e.target
        const tasks = form.tasks.value;
        const hours = form.hours.value;
        const formattedDate = date.toISOString().split('T')[0];
        const data = { tasks, hours, date: formattedDate };
        console.log(data)

        
        try {
            const response = await axiosPublic.post(`/employee`, data)
            refetch()
            console.log('Data submitted successfully:', response.data);
            toast.success('Data submitted successfully')
        } catch (error) {
            console.error('Error submitting data:', error);
            toast.error('Error submitting data')
        }
    }

    const { data: users = [],refetch } = useQuery({
        queryKey: ['employ'],
        queryFn: async () => {
            const res = await axiosPublic.get('/employee')
            return res.data;
        }
    })

    const handleDeleteUser=user =>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`/employee/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }



    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Task Tracker</h1>
            <form
                onSubmit={handleSubmit}
                className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-md space-x-28"
            >
                {/* Tasks Dropdown */}

                <select
                    name='tasks'
                    className="px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                >
                    <option value="Sales">Sales</option>
                    <option value="Support">Support</option>
                    <option value="Content">Content</option>
                    <option value="Paper-work">Paper-work</option>
                </select>

                {/* Hours Worked */}
                <input
                    type="number"
                    name='hours'
                    placeholder="Hours Worked"
                    className="w-24 px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                />

                <div>
                    <DatePicker name='date' selected={date} onChange={(date) => setDate(date)} />
                </div>
                {/* Submit Button */}
                <button
                    type="submit"
                    className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Add / Submit
                </button>
            </form>
            {/* table */}
            <div>
                <h2>total users{users.length}</h2>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Tasks</th>
                                    <th>Hours</th>
                                    <th>Date </th>
                                    <th>Edit </th>
                                    <th>Delete </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) => <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>{user.tasks}</td>
                                        <td>{user.hours} </td>
                                        <td>{user.date}</td>
                                        <td>
                                            <button
                                                // onClick={() => handleUpdate(user)}
                                                className="btn btn-ghost btn-md bg-green-700">
                                                <FaRegEdit  className=''/>
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => handleDeleteUser(user)}
                                                className="btn btn-ghost btn-lg ">
                                                <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                            </button>
                                        </td>
                                    </tr>)
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkSheet;