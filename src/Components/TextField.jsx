import React from 'react'
const TextField = ({ label, type, touched, errors, className, ...props }, ref) => {
    return (
        <>
            <label htmlFor="input">{label}</label>
            <input
                name={props.name}
                {...props}
                type={type}
                className={className}
                autoComplete='off'

            />
            {errors && <p className='text-danger text-red-600'>{errors}</p> }


        </>
    )
}

export default TextField