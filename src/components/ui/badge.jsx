import React from 'react';

const Badge = ({ className = '', ...props }) => {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${className}`} {...props} />
  );
};

export { Badge };
