import React from 'react';
import img from '../../../../assets/logo/hr.jpg'


const HrManagement = () => {
    return (
  
    <div className='flex flex-col lg:flex-row justify-between px-6 lg:px-24 gap-10'>
            {/* Image Section */}
            <div className='flex-1'>
                <img src={img} alt="HR Management" className='w-full h-auto rounded-lg' />
            </div>
            
            {/* Content Section */}
            <div className="font-sans bg-gray-50 p-4 lg:p-8 flex-1">
                {/* Header */}
                <h1 className="text-2xl lg:text-3xl font-bold text-blue-800 mb-4 lg:mb-6">HR MANAGEMENT SIMPLIFIED</h1>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed max-w-3xl mb-6">
                    Adapt to new realities, work faster and smarter. Determine a defined <br className='hidden lg:block' /> 
                    future of work for your organization with a strong, flexible, global HR <br className='hidden lg:block' /> 
                    solution. Explore the Product Here.
                </p>

                {/* Features Section */}
                <div className="mt-4 lg:mt-8 max-w-3xl">
                    <ul className="text-gray-700 space-y-2 lg:space-y-4">
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