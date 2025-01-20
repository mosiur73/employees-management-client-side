import React, { useContext } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Providers/AuthProvider';

const PaymentHistory = () => {
    const axiosSecure=useAxiosSecure()
    const {user} =useContext(AuthContext)

    const { data: history = [] } = useQuery({
        queryKey: ['payroll'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/history?email=${user.email}`);
            return res.data;
        },
    });
    return (
        <div>
            <h3 className='text-2xl'>Payment History : {history.length}</h3>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className='bg-[rgb(209,160,84)] p-4 text-white text-xl font-bold'>
        
              <tr>
                <th>Month/year</th>
                <th>Amount</th>
                <th> Transaction Id</th>
                <th> paymentDate</th>
              </tr>
        
      
    </thead>
    <tbody className='bg-orange-100'>
      {
        history.map(user =><tr key={user._id} >
            <th>{user.month}/{user.year}</th>
            <td>{user.salary}</td>
            <td>{user.transactionId}</td>
            <td>{user.paymentDate}</td>
          </tr>)
      }
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;