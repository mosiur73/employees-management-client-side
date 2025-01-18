import React from 'react';

const Card = ({ icon, title, description }) => {
    return (
        <div>
             <div className="bg-white shadow-md rounded-lg p-6 w-64 h-80 flex flex-col items-start">
      <div className="p-3 rounded-md bg-blue-100">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <a
        href="#"
        className="text-blue-500 font-medium mt-4 flex items-center"
      >
        Explore more →
      </a>
    </div>
        </div>
    );
};

export default Card;