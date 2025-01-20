import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { MdOutlineCancel, MdVerifiedUser } from 'react-icons/md';
import { FaCcAmazonPay } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const ManageUser = () => {
    const axiosSecure = useAxiosSecure()
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const { data: users = [],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })

    const handleVerified = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Verified Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
      
    const handlePayed= e=>{
            e.preventDefault();
            const form = e.target;
            const month = form.month.value;
            const year = form.year.value;
            const salary = form.salary.value;
            
            const data = { month,year,salary,name:selectedUser.name,paymentDate: new Date().toISOString() };
        
            axiosSecure.post(`/payroll`, data)
                .then(() => {
                    refetch();
                    toast.success('Data submitted successfully');
                })
                .catch(() => {
                    toast.error('Error submitting data');
                });
          }

    const openModal = (user) => {
        setSelectedUser(user);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedUser(null);
    };
 
    

    return (
        <div>
            <h1 className='text-center text-2xl text-[rgb(209,160,84)]'>Employee-List</h1>
            <h2 className='text-2xl'>Payroll User :{users.length} </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='rounded-mdd bg-[rgb(209,160,84)] p-4 text-white text-xl font-bold'>
                        <tr >
                            <th>si</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Salary</th>
                            <th>Bank account</th>
                            <th>Verified</th>
                            <th>Pay</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.salary}</td>
                                <td>{user.account}</td>
                                <td>
                                    {user.verified === 'verified' ? <button className='btn'> <MdVerifiedUser className='text-2xl text-green-600' /> </button> :<button
                                    onClick={()=>handleVerified(user)}
                                     className='btn '><MdOutlineCancel className='text-2xl text-red-600' /></button>}
                                </td>
                                {/* //pay button */}
                                <td>
                               <button
                               onClick={() => openModal(user)}
                               disabled={user?.verified !== 'verified'}
                                className='btn'> <FaCcAmazonPay className='text-2xl' /></button>
                                </td>
                               

                                <td>
                                    <Link to={`/dashboard/details/${user._id}`}>
                                    <button className="btn btn-ghost btn-lg ">
                                       Details
                                    </button>
                                    </Link>
                                </td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>

            {/* show pay modal  */}
            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Pay Salary</h2>
                        <form  onSubmit={handlePayed} className="space-y-4">
                           
                           <div className='flex gap-2'>
                           <input
                                type="text"
                                name="month"
                               placeholder='Month'
                                className="w-full px-4 py-2 border rounded-md"
                            />
                            <input
                                type="number"
                                name="year"
                               placeholder='year'
                                className="w-full px-4 py-2 border rounded-md"
                            />
                           </div>
                           <div>
                            <label htmlFor="salary">salary</label>
                           <input
                                type="number"
                                name="salary"
                                disabled
                                defaultValue={selectedUser.salary}
                                className="w-full px-4 py-2 border rounded-md"
                            />
                           </div>
                            
                            <div className="flex justify-between space-x-4">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="px-4 py-2 bg-gray-300 text-black rounded-md"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageUser;