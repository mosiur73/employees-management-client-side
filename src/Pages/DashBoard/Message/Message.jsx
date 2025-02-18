import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';

const Message = () => {
    const axiosSecure=useAxiosSecure()


    const { data: contacts = [] } = useQuery({
        queryKey: ['employ'],
        queryFn: async () => {
            const res = await axiosSecure.get('/contact');
            return res.data;
        },
    });
   
    return (
      
        <div className="bg-gray-50 min-h-screen py-12 px-6">
          <Helmet>
                          <title>Emplyee-Message</title>
                      </Helmet>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Total Messages: {contacts.length}
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          {contacts.length === 0 ? (
            <p className="text-gray-600">No messages found.</p>
          ) : (
            <ul className="divide-y divide-gray-300">
              {contacts.map((contact, index) => (
                <li key={index} className="py-4">
                  <div className="flex   mb-2">
                    <span className="font-bold text-gray-800">Email:</span>
                    <span className="text-gray-600">{contact.email}</span>
                  </div>
                  <div>
                    <span className="font-bold text-gray-800">Message:</span>
                    <p className="text-gray-600">{contact.message}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
};

export default Message;