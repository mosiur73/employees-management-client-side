import axios from 'axios';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const Payroll = () => {
    const axiosSecure=useAxiosSecure()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['payroll'],
        queryFn: async () => {
            const res = await axiosSecure.get('/payroll');
            return res.data;
        },
    });

     // Mutation for handling payment
     const { mutate: payUser } = useMutation
     ({
      mutationFn: async (userId) => {
          const res = await axiosSecure.post(`/history/${userId}`, {
              paymentDate: new Date().toISOString(), 

          });
          console.log(res.data)
          return res.data;
      },
      onSuccess: () => {
          toast.success('payment successfully')
          refetch();
      },
  });
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
                <button  onClick={() => payUser(user._id)}  className='btn'>pay</button>
            </td>
            <td>{user.paymentDate ? new Date(user.paymentDate).toLocaleDateString() : ''}</td>
          </tr>)
    }
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Payroll;