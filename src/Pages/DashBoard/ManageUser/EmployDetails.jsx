import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const EmployDetails = () => {
  const { user } = useContext(AuthContext);
  const userData = useLoaderData();

  const {
    name,
    photoUrl,
    email,
    role,
    salary,
    Designation,
    account,
    verified,
  } = userData;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            src={photoUrl}
            alt={`${name}'s profile`}
            className="w-32 h-32 rounded-full object-cover shadow-md"
          />
        </div>

        {/* Employee Details */}
        <h2 className="text-2xl font-bold text-center mb-2">{name}</h2>
        <p className="text-center text-gray-500 mb-4">{Designation}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col bg-gray-50 p-4 rounded-lg shadow-md">
            <span className="text-gray-500 font-semibold">Email:</span>
            <span className="text-gray-700">{email}</span>
          </div>

          <div className="flex flex-col bg-gray-50 p-4 rounded-lg shadow-md">
            <span className="text-gray-500 font-semibold">Role:</span>
            <span className={`text-gray-700 font-bold capitalize ${role === 'Hr' ? 'text-green-600' : ''}`}>
              {role}
            </span>
          </div>

          <div className="flex flex-col bg-gray-50 p-4 rounded-lg shadow-md">
            <span className="text-gray-500 font-semibold">Salary:</span>
            <span className="text-gray-700">₹{salary}</span>
          </div>

          <div className="flex flex-col bg-gray-50 p-4 rounded-lg shadow-md">
            <span className="text-gray-500 font-semibold">Verified:</span>
            <span className={`text-gray-700 font-bold ${verified === 'verified' ? 'text-green-600' : 'text-red-600'}`}>
              {verified}
            </span>
          </div>

          <div className="flex flex-col bg-gray-50 p-4 rounded-lg shadow-md">
            <span className="text-gray-500 font-semibold">Account:</span>
            <span className="text-gray-700">{account}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 flex justify-center">
         <Link to="/dashboard/manageUser" >
         <button
           
           className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
         >
           Back to Dashboard
         </button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default EmployDetails;
