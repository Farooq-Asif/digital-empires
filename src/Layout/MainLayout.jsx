import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useDispatch } from "react-redux";
import { getTraffic } from "../store/traffic/actions/actionsCreators";
import { useLocation } from "react-router";
import ReactGA from 'react-ga';
const MainLayout = (WrapComponent) => {
  const MainLayoutComponent = (props) => {
    const dispatch = useDispatch();
const location=useLocation()
const pathName = location.pathname.split('/').filter(Boolean);

    useEffect(() => {
        dispatch(getTraffic(pathName));
        ReactGA.send({
          hitType:'pageview',
          page:window.location.pathname +  window.location.search
        })
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
