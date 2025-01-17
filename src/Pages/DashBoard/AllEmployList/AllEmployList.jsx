import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllEmployList = () => {
    const axiosSecure=useAxiosSecure()

    const { data: users = [], isLoading, isError } = useQuery({
        queryKey: ['verifiedUsers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/verified');
            return res.data;
        },
    });

    return (
        <div>
            <h2>Total verified Users : {users.length}</h2>
        </div>
    );
};

export default AllEmployList;