import React from "react";

const Card = ({ children, className = "", title, value }) => {
  return (
    <div className={`bg-gray-50 rounded-lg shadow-sm p-6 border border-gray-100 ${className}`}>
      {title && <h3 className="card-title text-lg font-semibold mb-2">{title}</h3>}
      {value && <p className="card-value text-md text-gray-700">{value}</p>}
      {children}
    </div>
  );
};

export default Card;

export const CardContent = ({ children, className = "" }) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {children}
    </div>
  );
};
