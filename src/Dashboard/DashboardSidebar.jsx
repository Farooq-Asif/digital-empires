import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Sidebar, Menu, SubMenu } from "react-pro-sidebar";
import { MdDashboard } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import logo from '../Assets/Images/favicon.png'
import { GlobalInfo } from "../App";
const DashboardSidebar = () => {
  const { isCollapsed } = useContext(GlobalInfo);
 
 

  
  return (
    <>
      <Sidebar
        collapsed={isCollapsed}
        style={{ backgroundColor: "rgba(255, 255, 255, 1)", height: "100vh" }}
      >
         <div className="flex  items-center p-4">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          {!isCollapsed && 
          <span className="text-xl font-semibold text-black z-0">igital Empires</span>}
        </div>
        <Menu
          menuItemStyles={{
            button: ({ level, active }) => {
              if (level === 0) {
                return {
                  color: "black",
                };
              }
              return {};
            },
          }}
        >
          <SubMenu label={isCollapsed ? <MdDashboard size={25}/>:'Dashboard'} component={<NavLink to='/dashboard'/>} ></SubMenu>
          <SubMenu label={isCollapsed ?<IoNewspaperOutline size={25}/>:'Recent News'} component={<NavLink to='/recentnews'/>} ></SubMenu>
        </Menu>

        {/* {!path.includes(location.pathname) && (
          <div className="d-flex justify-content-center ">
            <FormButton
              onClick={handleSignOutbtn}
              className="St-Signout-button"
              ButtonIcon={<IoIosLogOut className="mb-1 me-1" />}
              Buttontext={t("SignOut")}
            />
          </div>
        )} */}
      </Sidebar>
    </>
  );
};

export default DashboardSidebar;
