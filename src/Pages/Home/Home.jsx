import React from "react";
import MainLayout from "../../Layout/MainLayout";
import LeaderShipComponent from "../../Components/LeaderShipComponent";
import img from "../../Assets/Images/demand_connecting_people-hero.jpg";
import { motion } from "framer-motion";
import { TeamInfo } from "../../Data/TeamInfo";
import ProductComponent from "../../Components/ProductComponent";
import CounterComponent from "../../Components/CounterComponent";
import HomeMainSection from "../../Components/HomeMainSection";
import Slider from "../../Components/Slider";
import HomeOurProjectSection from "../../Components/HomeOurProjectSection";
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
      <HomeOurProjectSection />
      <CounterComponent title='Operating at scale' />

      <div className="container mx-auto my-10 px-6 lg:px-[10%] py-10 space-y-24">
        <h2 className="sm:text-[50px] lg:text-[65px] xs:text-[35px] text-nowrap font-bold leading-tight   ">
          {" "}
          Meet the leadership team.{" "}
        </h2>
        {TeamInfo.map((item, index) => {
          return (
            <LeaderShipComponent
              key={index}
              text1={item.text1}
              text2={item.text2}
              text3={item.text3}
              title={item.title}
              Subtitle={item.Subtitle}
              reverseLayout={index % 2 !== 0}
              img={item.img}
            />
          );
        })}
      </div>
    </>
  );
};

export default MainLayout(Home);
