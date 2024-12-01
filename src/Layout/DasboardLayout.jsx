import React  from 'react';
import DashboardSidebar from '../Dashboard/DashboardSidebar';
import Footer from '../Footer/Footer';
import TopBar from '../Components/TopBar';
const DashboardLayout = (WrappedComponent) => {

    const DashboardLayoutComponent = (props) => {
        const savedTheme = localStorage.getItem("theme");
        return (
            <>
                <div className="flex w-full overflow-hidden">
                    <DashboardSidebar />
                 
                    <div className={`flex-1 p-4 ${savedTheme==='light' && 'bg-gray-100 '} transition-all duration-400 ease-linear`}>
                    <TopBar/>
                        <WrappedComponent {...props} />
                    </div>
                </div>
                <Footer />
            </>
        );
    };

    return DashboardLayoutComponent; 
};

export default DashboardLayout;
