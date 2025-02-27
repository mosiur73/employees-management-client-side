import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const faqs = [
  { 
    question: "How can I add a new employee?", 
    answer: "Go to the 'Employees' section, click 'Add Employee', fill in the details, and save." 
  },
  { 
    question: "How do I update an employee’s details?", 
    answer: "Navigate to the employee's profile, click 'Edit', make changes, and save." 
  },
  { 
    question: "Can I assign multiple roles to an employee?", 
    answer: "Yes, you can assign multiple roles under the 'Roles & Permissions' section." 
  },
  { 
    question: "How do I generate employee performance reports?", 
    answer: "Go to the 'Reports' section, select 'Performance', choose an employee, and generate the report." 
  },
  { 
    question: "What happens when an employee is marked as inactive?", 
    answer: "Inactive employees cannot log in or access the system but their records remain stored." 
  }
];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { theme } = useContext(AuthContext)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   
    <div className={`p-6 shadow-lg rounded-lg mt-14 
      ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      <h2 className="text-3xl font-bold text-center">
        <span className="text-orange-500">Employee</span> Management FAQ
      </h2>
      <p className={`text-center mt-2 ${theme === "dark" ? "text-gray-300" : "text-gray-500"}`}>
        Common questions about managing employees.
      </p>
      <div className="mt-6">
        {faqs.map((faq, index) => (
          <div key={index} className={`border-b ${theme === "dark" ? "border-gray-700" : "border-gray-300"}`}>
            <button
              className={`w-full flex justify-between items-center py-4 px-6 text-lg font-medium focus:outline-none 
                ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className={`px-6 pb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
