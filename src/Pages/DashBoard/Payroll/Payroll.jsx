import axios from 'axios';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Payroll = () => {
    const axiosSecure=useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['payroll'],
        queryFn: async () => {
            const res = await axiosSecure.get('/payroll');
            return res.data;
        },
    });
    return (
        <div>
            <h3>total payment: {users.length}</h3>
        </div>
    );
};

export default Payroll;