import React from "react";
import GetInTouchComponent from "../../Components/GetInTouchComponent";
import MainLayout from "../../Layout/MainLayout";
import CounterComponent from "../../Components/CounterComponent";
import img from "../../Assets/Images/Blue Dark Professional Geometric Business Project Presentation .png";
import PressRecentNewComponent from "../../Components/PressRecentNewComponent";
const Press = () => {
  return (
    <>
      <GetInTouchComponent
        title="SKILLPRO LTD.press page"
        myclass="bg-black text-white relative"
        paragraph="Your one-stop shop for all the latest press releases from SKILLPRO LTD , press kit assets and more."
      />
      {/* <div className="absolute left-[250px] bottom-[-150px] flex justify-center items-center  ">
        <img
          src={img}
          width={1400}
          className=""
          style={{ mixBlendMode: "multiply" }}
        />
      </div> */}
      <div className="my-[100px]">
        <PressRecentNewComponent />
      </div>
      <CounterComponent title="About SKILLPRO LTD " />
    </>
  );
};

export default MainLayout(Press);
