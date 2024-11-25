import React from 'react'
const TextField = ({ label, type, touched, error, className, ...props }, ref) => {
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
            {touched && error ? <p className='text-danger'>{error}</p> : null}


        </>
    )
}

export default TextField