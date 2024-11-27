import React,{useContext} from "react";
import CountUp from "react-countup";
import { GlobalInfo } from "../App";

const CounterComponent = ({title}) => {
  const { themeValue } = useContext(GlobalInfo)
  const savedTheme = localStorage.getItem("theme");
  return (
    <section className={`py-[200px] ${savedTheme === 'dark' ? 'bg-black text-white' :'bg-[#F2F2F1] '}`} id="counter">
      <div className="container mx-auto px-4">
        <div className=" xs:mx-[20px]  sm:mb-12 xs:mb-12 md:mb-12 lg:mb-12 lg:mx-[140px]">
          <h2 className="text-4xl text-[65px] xs:text-[35px] text-nowrap font-bold leading-tight ">
            <span className="block animate-slideInUp">{title}</span>
          </h2>
          <p className=" mt-4">
            Our products reach millions of consumers, helping them make
            <br />
            better decisions and acquire the things they’ll love every day.
          </p>
        </div>

        {/* Counter Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Stat Item */}
          <div className="text-center">
            <h4 className="text-3xl font-bold ">
              $<span className="counter" data-count="1"><CountUp start={0} end={1} duration={1.2}/></span>B
            </h4>
            <span>ecommerce volume annually.</span>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold">
              <span className="counter" data-count="200"><CountUp start={0} end={200} duration={1.2}/></span>K+
            </h4>
            <span className="">shopping decisions facilitated daily.</span>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold ">
              <span className="counter" data-count="1.5"><CountUp start={0} end={1.5} duration={1.2}/></span>M+
            </h4>
            <span >shopping answers verified.</span>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold ">
              <span className="counter" data-count="100"><CountUp start={0} end={100} duration={1.2}/></span>K
            </h4>
            <span >community inputs daily.</span>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold ">
              <span className="counter" data-count="100"><CountUp start={0} end={100} duration={1.2}/></span>
            </h4>
            <span>staff globally.</span>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold ">
              <span className="counter" data-count="7"><CountUp start={0} end={7} duration={1.2}/></span>
            </h4>
            <span >equity partners.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterComponent;
