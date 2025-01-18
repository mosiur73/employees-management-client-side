import axios from 'axios';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import {  useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { FcPaid } from 'react-icons/fc';

const Payroll = () => {
    const axiosSecure=useAxiosSecure()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['payroll'],
        queryFn: async () => {
            const res = await axiosSecure.get('/payroll');
            return res.data;
        },
    });

   
  const payUser=user =>{
    const month=user.month;
    const year=user.year;
    const salary=user.salary;
   
    const data={month,year,salary, paymentDate: new Date().toISOString(),  transactionId: `txn_${Math.random().toString(36).substring(2, 15)}`,}
    console.log(data)
     axiosSecure.post('/history', data)
                    .then(() => {
                        refetch();
                        toast.success('payment  successfully');
                    })
                    .catch(() => {
                        toast.error('Error submitting data');
                    });
  }
    return (
        <div>
            <h3 className='text-2xl mb-2'>Total payment: {users.length}</h3>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className='rounded-mdd bg-[rgb(209,160,84)] p-4 text-white text-xl font-bold'>
      <tr>
        <th>si</th>
        <th>Name</th>
        <th>Salary</th>
        <th> Month</th>
        <th>year</th>
        <th>Pay</th>
        <th>Payment Date</th>
      </tr>
    </thead>
    <tbody>
    {
        users.map((user,index) => <tr key={user._id}>
            <th>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.salary}</td>
            <td>{user.month}</td>
            <td>{user.year}</td>
            <td>
                <button  onClick={() => payUser(user)}  className='btn'>pay</button>
                <button>paid<FcPaid /></button>
            </td>
            <td>payment Date </td>
          </tr>)
    }
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Payroll;