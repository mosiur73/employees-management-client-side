import React, { useContext } from 'react';
import { FaCalendar, FaEnvelopeOpenText, FaUser, FaUsers } from 'react-icons/fa';
import Card from './Card';
import { AiFillDollarCircle } from 'react-icons/ai';
import { GiProgression } from 'react-icons/gi';
import { AuthContext } from '../../../Providers/AuthProvider';

const Service = () => {
  const { theme } = useContext(AuthContext)
    const cards = [
        {
          icon: <FaUsers className='text-2xl' />,
          title: "Core HRMS",
          description:
            "Employee management, directory, workflows, self-service, document management",
        },
        {
          icon: <FaCalendar className='text-2xl'/>,
          title: "Attendance",
          description:
            "Monitor attendance, schedule smart shifts, and make many attendance methods possible.",
        },
        {
          icon: <AiFillDollarCircle className='text-2xl' />,
          title: "Leave Management",
          description:
            "Configure every type of leave policy and use leave dashboards and reports for tracking",
        },
        {
          icon: <FaCalendar className='text-2xl'/>,
          title: "Payroll",
          description:
            "End-to-end payroll processing, taxing, benefits tracking, exemptions, User Payslip.",
        },
        {
            icon: <FaEnvelopeOpenText className='text-2xl' />,
            title: "Task Management",
            description:
              "Plan tasks, track and complete them efficiently, delegate task and set remainders.",
          },
          {
            icon: <GiProgression className='text-2xl' />,
            title: "Performance Management",
            description:
              "Staff evaluations, goal setting, talent management and ongoing 360-degree feedback.",
          },
          {
            icon: <FaUser className='text-2xl' />,
            title: "Onboarding",
            description:
              "Acquire talents, skills and have a smooth run for employees from day one.",
          },
          {
            icon:  <FaEnvelopeOpenText className='text-2xl' />,
            title: "Recruitment",
            description:
              "AI-enabled engine for hiring, skill set matches, tracking interviews and feedback.",
          },
      ];
    return (
       <div className='bg-gray-100 mt-14'>
        <div className='py-6'>
        <h1 className='text-3xl text-center text-black font-bold'>PLATFORM FEATURES</h1>
        <p className='text-center text-black text-xl font-bold pb-4'>Everything you need to create a high-performance culture</p>
        </div>
         <div className="px-4  py-4 ">
       
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`}>
      {cards.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  </div>
       </div>

    );
};

export default Service;