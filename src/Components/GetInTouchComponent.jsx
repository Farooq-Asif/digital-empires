import React from 'react';
import { useLocation } from 'react-router';

const GetInTouchComponent = ({title,paragraph,myclass}) => {
    const savedTheme = localStorage.getItem("theme");
    const location=useLocation()
    const path=['/press']
    return (
        <div className={`  py-40  min-h-[400px]  shadow-md ${savedTheme === 'dark' ? 'bg-black text-white relative' : myclass}`}>
            <div className='flex flex-col xs:ms-5 sm:ms-5 md:ms-5 lg:ms-60  '>
                <h2 className="text-4xl font-bold text-[65px]    mb-4">{title}</h2>
                <span className="text-lg   block">
                   
                    {paragraph}
                </span>
            </div>

        </div>
    );
};

export default GetInTouchComponent;
