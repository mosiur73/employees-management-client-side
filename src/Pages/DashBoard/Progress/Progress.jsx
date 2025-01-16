import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Progress = () => {
    const axiosSecure=useAxiosSecure

    const { data: users = [], refetch } = useQuery({
        queryKey: ['employ'],
        queryFn: async () => {
            const res = await axiosSecure.get('/employee');
            return res.data;
        },
    });
    return (
        <div>
            <h3 className='text-2xl'>progress: {users.length}</h3>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className='rounded-mdd bg-[rgb(209,160,84)] p-4 text-white text-xl font-bold'>
      <tr>
        <th>si</th>
        <th>Tasks</th>
        <th>Hours</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
     {
        users.map((user,index) =><tr key={user._id}>
            <th>{index + 1}</th>
            <td>{user.tasks}</td>
            <td>{user.hours}</td>
            <td>{user.date}</td>
          </tr> )
     }
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Progress;