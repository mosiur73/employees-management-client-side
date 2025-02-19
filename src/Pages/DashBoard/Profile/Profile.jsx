import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Profile = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <div className="text-center mt-10 text-xl font-semibold">Loading profile...</div>;
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="max-w-3xl w-full p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Profile</h2>
                <div className="flex flex-col items-center space-y-6">
                    <img src={user.photoURL} alt="Profile" className="w-40 h-40 rounded-full border-4 border-gray-300 shadow-md" />
                    <h3 className="text-3xl font-semibold text-gray-900">{user.displayName}</h3>
                    <p className="text-lg text-gray-600">Position : {user.role || ' Not Available'}</p>
                </div>
                <div className="mt-8 space-y-6 text-lg">
                    <div className="flex items-center bg-gray-100 p-4 rounded-lg">
                        <FaEnvelope className="text-gray-600 mr-3" />
                        <span>{user.email}</span>
                    </div>
                    
                   
                </div>
            </div>
        </div>
    );
};

export default Profile;
