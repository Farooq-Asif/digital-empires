import React from 'react';
import DashboardLayout from '../Layout/DasboardLayout';
const Main = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <h1 className="text-white text-4xl font-bold" style={{
        animation: 'slideIn 2s ease-out forwards'
      }}>
        <div className='flex items-center'>
            <span className="text-xl  font-extrabold">SKILLPRO LTD  is launching soon
            </span>
        <h2></h2>
        </div>
      </h1>

      <style>
        {`
          @keyframes slideIn {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}

export default DashboardLayout(Main);
