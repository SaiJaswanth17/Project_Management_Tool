import React from 'react';

const Progress = ({ value, className }) => {
  return (
    <div className={`w-full bg-gray-100 rounded-full h-2.5 ${className}`}>
      <div 
        className="bg-blue-500 h-2.5 rounded-full" 
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};


export default Progress;
