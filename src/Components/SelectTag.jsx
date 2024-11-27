import React from 'react'

const SelectTag = ({ label, error, touched,errors, options, ...props }) => {
    return (
        <>
            <label >{label}</label>
            <select
            {...props}
                id="about"
                className="px-2 py-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
                {options?.map(option => (
                    <option key={option?.value} value={option?.value} label={option?.label}>
                        {option?.label}
                    </option>
                ))}
                
            </select>
            {errors && <p className="text-red-600 text-sm mt-1">{errors}</p>}

        </>

    )
}

export default SelectTag