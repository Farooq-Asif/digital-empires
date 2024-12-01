import React from "react";
import MainLayout from "../../Layout/MainLayout";
import LeaderShipComponent from "../../Components/LeaderShipComponent";
import img from "../../Assets/Images/demand_connecting_people-hero.jpg";
import { TeamInfo } from "../../Data/TeamInfo";
import CounterComponent from "../../Components/CounterComponent";
import HomeMainSection from "../../Components/HomeMainSection";
import HomeOurProjectSection from "../../Components/HomeOurProjectSection";
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
      <HomeOurProjectSection />
      <CounterComponent title='Operating at scale' />

      <div className="container mx-auto my-10 px-6 lg:px-[10%] py-10 xs:space-y-7 lg:space-y-24">
        <h2 className="sm:text-[50px] lg:text-[65px] xs:text-[28px] text-nowrap font-bold leading-tight   ">
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
    <TeamCarousel/>

    </>
  );
};

export default MainLayout(Home);
