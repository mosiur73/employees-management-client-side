import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const EmployDetails = () => {
    // const userData=useParams()
    const userData=useLoaderData()
    console.log(userData);
    
    

   
    
    return (
        <div>
           
        </div>
    );
};

export default EmployDetails;