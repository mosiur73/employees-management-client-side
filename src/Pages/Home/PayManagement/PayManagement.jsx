import React from 'react';
import img from '../../../assets/logo/payroll.jpg'

const PayManagement = () => {
    return (
        <div>
            
                <div className='flex flex-col lg:flex-row justify-between px-6 lg:px-24 gap-10'>
 
                        {/* Content Section */}
                        <div className="font-sans bg-gray-50 p-4 lg:p-8 flex-1">
                            {/* Header */}
                            <h1 className="text-2xl lg:text-3xl font-bold text-blue-800 mb-4 lg:mb-6">PAYROLL MANAGEMENT</h1>
            
                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed max-w-3xl mb-6">
                            Simplify the complex processes of the payroll with RapidHR,
                             also a powerful, secure, accurate, automated and 100% compliant 
                             system!Rapid HR provides quicker processing, precise payouts, any business 
                             that wants to prevent potential financial and legal repercussions from 
                             non-compliance and guarantee that employees are paid accurately  
                            and on time with precise payroll administration.
                            </p>
            
                            {/* Features Section */}
                            <div className="mt-4 lg:mt-8 max-w-3xl">
                                <ul className="text-gray-700 space-y-2 lg:space-y-4">
                                    <li>✨ Quickly determine payroll calculations and deductions.</li>
                                    <li>✨ Generate accurate Payslips.</li>
                                    <li>✨ Using payroll management to plan future costs.</li>
                                    <li>✨Secure Data’s and Privacy</li>
                                </ul>
                            </div>
                        </div>
                         {/* Image Section */}
                         <div className='flex-1'>
                            <img src={img} alt="HR Management" className='w-full h-auto rounded-lg' />
                        </div>
                    </div>
            
        </div>
    );
};

export default PayManagement;