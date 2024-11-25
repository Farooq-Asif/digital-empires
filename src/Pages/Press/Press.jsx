import React from 'react'
import GetInTouchComponent from '../../Components/GetInTouchComponent'
import MainLayout from '../../Layout/MainLayout'
const Press = () => {
    return (
        <>
            <GetInTouchComponent title='Demand.iopress page.' myclass='bg-black' paragraph='Your one-stop shop for all the latest press releases from Demand.io, press kit assets and more.' />
        </>
    )
}

export default MainLayout(Press)