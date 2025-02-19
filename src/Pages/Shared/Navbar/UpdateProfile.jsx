import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const UpdateProfile = () => {
    const {user}=useContext(AuthContext)

    if (!user) {
        return <div className="text-center mt-10 text-xl">Loading profile...</div>;
    }

   
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Profile</h2>
        <div className="flex flex-col items-center space-y-4">
            <img src={user.photoURL } alt="Profile" className="w-32 h-32 rounded-full border-2 border-gray-300" />
            <h3 className="text-2xl font-semibold">{user.displayName}</h3>
            <p className="text-gray-600">{user.position} - {user.department}</p>
        </div>
        <div className="mt-6 space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
                <strong>Email:</strong> {user.email}
            </div>
            
        </div>
    </div>
    );
};

export default UpdateProfile;