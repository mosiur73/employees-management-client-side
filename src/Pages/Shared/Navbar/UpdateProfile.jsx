import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query'; // Make sure you're using the correct query package
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure'; // Assuming this is another custom hook

const UpdateProfile = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        // Add any other fields for user data you need to update
    });

    const { data: users = [], isLoading, isError, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        },
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle form submission to update user data
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Update the user profile
            const res = await axiosSecure.put('/users/update', userData);
            console.log('Profile updated successfully:', res.data);
            refetch(); // Refetch users after update
        } catch (err) {
            console.error('Error updating profile:', err);
        }
    };

    useEffect(() => {
        if (users.length > 0) {
            // Pre-fill form with current user data
            const currentUser = users[0]; // assuming the first user is the one to update
            setUserData({
                name: currentUser.name || '',
                email: currentUser.email || '',
            });
        }
    }, [users]);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading user data</div>;

    return (
        <div className="update-profile-container">
            <h2>Update Profile</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                {/* Add more fields as necessary */}
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default UpdateProfile;
