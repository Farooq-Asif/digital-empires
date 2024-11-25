import React from 'react'

const Copyright = () => {
    const currentYear = new Date().getFullYear();
    return (
        <p className='text-center mt-4'>Copyright {currentYear} | All rights reserved</p>

    )
}

export default Copyright