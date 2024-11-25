import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
const MainLayout = (WrapComponent) => {
    return function mainlayout(props) {
        return (
            <>
                <Navbar />
                    <WrapComponent {...props} />
                <Footer />
            </>
        )
    }
}

export default MainLayout