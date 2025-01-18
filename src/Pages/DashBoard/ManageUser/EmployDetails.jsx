import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const EmployDetails = () => {
    const {user}=useContext(AuthContext)
    const userData=useLoaderData()
    console.log(userData);

    
    

   
    
    return (
        <div>
           <h3>{user.displayName}</h3>
        </div>
    );
};

export default EmployDetails;