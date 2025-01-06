import React from 'react'
import LeaderShipComponent from '../../Components/LeaderShipComponent';
import MainLayout from '../../Layout/MainLayout';
import { TeamInfo } from '../../Data/TeamInfo';
const CeoDetails = () => {
  return (
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
  )
}

export default MainLayout(CeoDetails)