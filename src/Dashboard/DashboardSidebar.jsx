import React, { useContext, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Sidebar, Menu, SubMenu } from "react-pro-sidebar";
import { IoIosLogOut } from "react-icons/io";
import logo from '../Assets/Images/favicon.png'
import { GlobalInfo } from "../App";
import { useDispatch } from "react-redux";
const DashboardSidebar = () => {
  const { isCollapsed, setIsCollapsed } = useContext(GlobalInfo);
  const location = useLocation();
  const Dispatch = useDispatch();
  const Navigate = useNavigate();
  const path = [
    "/dashboard",
    "/listofcourses",
    "/addnewcourses",
    "/schedules",
    "/profile",
  ];
 
  const handleResize = () => {
    if (window.innerWidth <= 1053) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const handleSignOutbtn = () => {
    Navigate("/login");
  };
  return (
    <>
      <Sidebar
        collapsed={isCollapsed}
        style={{ backgroundColor: "rgba(255, 255, 255, 1)", height: "100vh" }}
      >
         <div className="flex  items-center p-4">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          {!isCollapsed && 
          <span className="text-xl font-semibold z-0">igital Empires</span>}
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
          <SubMenu label='Dashboard' component={<NavLink to='/dashboard'/>} ></SubMenu>
          <SubMenu label='Recent News' component={<NavLink to='/recentnews'/>} ></SubMenu>
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
