import React from 'react';
import img from '../../../../assets/logo/hr.jpg'
import { FaStar } from 'react-icons/fa';

const HrManagement = () => {
    return (
        <div className='flex px-24 gap-10'>
            <div className='flex-1'>
                <img src={img} alt="" />
            </div>
             <div className="font-sans bg-gray-50 min-h-screen flex flex-1 flex-col p-4">
      {/* Header */}
      <h1 className="text-3xl font-bold text-blue-800 mb-6">HR MANAGEMENT SIMPLIFIED</h1>

      {/* Description */}
      <p className="text-gray-600  max-w-3xl mb-8">
        Adapt to new realities, work faster and smarter. Determine a defined <br /> 
        future of work for your organization with a strong, flexible, global HR <br /> 
        solution.Explore the Product Hear.
      </p>

      {/* Features Section */}
      <div className="mt-8 max-w-3xl">
        <ul className="text-gray-700 space-y-4">
          <li>✨ Easy access to documents and information.</li>
          <li>✨ An employee database that scales.</li>
          <li>✨ Smart HR workflows.</li>
          <li>✨ Automation of HR processes.</li>
        </ul>
      </div>
       </div>
        </div>
    );
};

export default HrManagement;