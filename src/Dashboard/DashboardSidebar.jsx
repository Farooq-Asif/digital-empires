import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Sidebar, Menu, SubMenu } from "react-pro-sidebar";
import { MdDashboard } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { GlobalInfo } from "../App";
const DashboardSidebar = () => {
  const { isCollapsed } = useContext(GlobalInfo);

  return (
    <>
      <Sidebar
        collapsed={isCollapsed}
        style={{ backgroundColor: "rgba(255, 255, 255, 1)", height: "100vh" }}
      >
        <div
          className={`flex  items-center p-4 ${
            isCollapsed && "ps-7"
          }`}
        >
          <span className={`text-2xl font-extrabold ${isCollapsed && 'text-[hsl(358.36,95.63%,44.9%)]'}  `}>S</span>
          {!isCollapsed && (
            <span className="text-xl  font-extrabold">
              <span className="text-[hsl(358.36,95.63%,44.9%)]">KILLPRO</span>{" "}
              LTD
            </span>
          )}
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
          <SubMenu
            label={isCollapsed ? <MdDashboard size={25} /> : "Dashboard"}
            component={<NavLink to="/dashboard" />}
          ></SubMenu>
          <SubMenu
            label={
              isCollapsed ? <IoNewspaperOutline size={25} /> : "Recent News"
            }
            component={<NavLink to="/recentnews" />}
          ></SubMenu>
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
