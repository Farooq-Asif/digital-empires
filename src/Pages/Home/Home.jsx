import React from "react";
import MainLayout from "../../Layout/MainLayout";
import img from "../../Assets/Images/demand_connecting_people-hero.jpg";
import { TeamInfo } from "../../Data/TeamInfo";
// import CounterComponent from "../../Components/CounterComponent";
import HomeMainSection from "../../Components/HomeMainSection";
// import HomeOurProjectSection from "../../Components/HomeOurProjectSection";
import TeamCarousel from "../../Components/TeamCarasoul";
const Home = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <HomeMainSection onScroll={handleScroll} />
      <img src={img} className="transform scale-102 " id="next-section" />
      {/* <HomeOurProjectSection /> */}
      {/* <CounterComponent title='Operating at scale' /> */}
      <TeamCarousel />
    </>
  );
};

export default MainLayout(Home);
