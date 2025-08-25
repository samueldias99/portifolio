import React from 'react';

const Progress = ({ value = 0, className = '', ...props }) => {
  return (
    <div className={`w-full bg-gray-700 rounded-full h-2 ${className}`} {...props}>
      <div
        className="bg-green-500 h-2 rounded-full transition-all duration-300"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export { Progress };
