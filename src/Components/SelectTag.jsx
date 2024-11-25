import React from 'react'

const SelectTag = ({ label, error, touched, options, ...props }) => {
    return (
        <>
            <label >{label}</label>
            <select
                id="about"
                className="px-2 py-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
                {options?.map(option => (
                    <option key={option?.value} value={option?.value} label={option?.label}>
                        {option?.label}
                    </option>
                ))}
            </select>
        </>

    )
}

export default SelectTag