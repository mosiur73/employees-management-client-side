import React from 'react';
import img from '../../../assets/logo/help.jpg'

const HelpManage = () => {
    return (
        <div>
             <div className='flex flex-col lg:flex-row justify-between px-6 lg:px-24 gap-10'>
                        {/* Image Section */}
                        <div className='flex-1'>
                            <img src={img} alt="HR Management" className='w-full h-auto rounded-lg' />
                        </div>
                        
                        {/* Content Section */}
                        <div className="font-sans bg-gray-50 p-4 lg:p-8 flex-1">
                            {/* Header */}
                            <h1 className="text-2xl lg:text-3xl font-bold text-blue-800 mb-4 lg:mb-6">HELP DESK</h1>
            
                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed max-w-3xl mb-6">
                            Provide incomparable support to your employees, wherever they are, 
                            any time they need you with an efficient, automated, and advanced
                             helpdesk system.Employees can get assistance or ask questions
                              about human resources rules,
                             practises, and benefits at the HR help desk, 
                             a single point of contact. Read more…
                            </p>
            
                           
                            <div className="mt-4 lg:mt-8 max-w-3xl">
                                <ul className="text-gray-700 space-y-2 lg:space-y-4">
                                    <li>✨ Improved analytics and reporting.</li>
                                    <li>✨ Information and support.</li>
                                    <li>✨ policies and practises.</li>
                                    <li>✨ Issue resolution.</li>
                                    
              </ul>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default HelpManage;