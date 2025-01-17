import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { MdEditDocument } from 'react-icons/md';
import { FaFire } from 'react-icons/fa';
import { IoMdCheckmark } from 'react-icons/io';
import { toast } from 'react-toastify';
import { LuBrackets } from 'react-icons/lu';
import Swal from 'sweetalert2';

const AllEmployList = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedUser, setSelectedUser] = useState(null); // State for the selected user
  const [newSalary, setNewSalary] = useState(''); // State for new salary input
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  const { data: users = [],refetch } = useQuery({
    queryKey: ['verifiedUsers'],
    queryFn: async () => {
      const res = await axiosSecure.get('/verified');
      return res.data;
    },
  });

  // Handle opening the popup
  const handleAdjustClick = (user) => {
    setSelectedUser(user);
    setNewSalary(user.salary); 
    setShowPopup(true);
  };

  // Handle updating the salary
  const handleUpdateSalary = async () => {
    try {
      await axiosSecure.patch(`/update-salary/${selectedUser._id}`, {
          salary: newSalary,
        });
        refetch()
      toast.success('salary updated successful')
      setShowPopup(false);
    } catch (error) {
      console.error('Failed to update salary:', error);
      alert('Error updating salary!');
    }
  };
   

  //Make HR admin
   const handleMakeHr = user =>{
          axiosSecure.patch(`/users/hr/${user._id}`)
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
  return (
    <div>
      <h2>Total Verified Users: {users.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* Table Head */}
          <thead className="bg-[rgb(209,160,84)] p-4 text-white text-xl font-bold">
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Adjust Salary</th>
              <th>Fire</th>
              <th>Make HR</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <th>{user.name}</th>
                <th>{user?.Designation || 'Not Assigned'}</th>
                <th>{user.salary}</th>
                <th>
                  <button
                    className="btn"
                    onClick={() => handleAdjustClick(user)}
                  >
                    Adjust <MdEditDocument className="text-2xl" />
                  </button>
                </th>
                <th>
                  <button className="btn">
                    <FaFire className="text-red-600 text-2xl" />
                  </button>
                </th>
                <th>
                 {user.role === 'Hr' ? <button className="btn">
                    <IoMdCheckmark className="text-2xl" />
                  </button> :
                  <button
                  onClick={()=>handleMakeHr(user)}
                  className='btn'><LuBrackets className='text-2xl' /></button>}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup for Adjusting Salary */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">Adjust Salary</h3>
            <p className="mb-4">
              <strong>User:</strong> {selectedUser?.name}
            </p>
            <input
              type="number"
              className="input input-bordered w-full mb-4"
              value={newSalary}
              onChange={(e) => setNewSalary(e.target.value)}
              placeholder="Enter new salary"
            />
            <div className="flex justify-end gap-4">
              <button
                className="btn btn-primary"
                onClick={handleUpdateSalary}
              >
                Update
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllEmployList;
