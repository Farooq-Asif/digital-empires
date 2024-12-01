import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useDispatch } from "react-redux";
import { getTraffic } from "../store/traffic/actions/actionsCreators";
import { useLocation } from "react-router";

const MainLayout = (WrapComponent) => {
  const MainLayoutComponent = (props) => {
    const dispatch = useDispatch();
const location=useLocation()
const pathName = location.pathname.split('/').filter(Boolean);

    useEffect(() => {
        dispatch(getTraffic(pathName));
    }, [dispatch]);

    return (
      <>
        <Navbar />
        <WrapComponent {...props} />
        <Footer />
      </>
    );
  };

  return MainLayoutComponent;
};

export default MainLayout;
