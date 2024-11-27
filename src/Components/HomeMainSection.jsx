import React, { useRef, useContext } from 'react'
import { motion } from 'framer-motion';
import { TeamInfo } from '../Data/TeamInfo.js';
import ProductComponent from './ProductComponent';
import { GlobalInfo } from '../App.js';
const HomeMainSection = ({ onScroll }) => {
  const letters = "The Shopping knowledge network".split("");
  const { themeValue } = useContext(GlobalInfo)
  const nextSectionRef = useRef(null);
  const savedTheme = localStorage.getItem("theme");

  return (
    <div
      className={`${savedTheme === 'dark' ? 'bg-black text-white' : 'bg-gradient-to-b from-[#060660] via-[#040440] to-[#000000]'}  relative pt-[145px] text-white `}
    >
      
        <motion.h1
          className={`lg:text-[92px] xs:text-[40px] sm:text-[50px] md:text-[70px]   text-center font-bold `}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0 * 0.1,
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            The Shopping  <br />knowledge network
          </motion.span>
        </motion.h1>
        <p className={`text-center `}>Demand.io creates AI-driven social shopping experiences that help millions of people shop smarter, save money, and connect with their passions.</p>
        <div className='flex justify-center mt-[100px] xs:mb-5 sm:mb-5'>
          <button className={`flex items-center  font-medium px-4 py-2 rounded-lg shadow-md  transition ${savedTheme === 'dark' ? "bg-white text-black  " : "bg-black text-white"}`}>
            We're hiring
            <span className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
        <ProductComponent />
      <div className="flex flex-col   items-center px-4">
        <div className="flex flex-col items-center w-full max-w-4xl  xs:space-y-10 sm:space-y-10 lg:space-y-20">
          <h2 className="font-bold text-center text-lg sm:text-xl md:text-2xl lg:text-5xl leading-snug">
            Demand.io is a tech accelerator built on top of an AI commerce data platform.
          </h2>
          <h2 className="font-bold text-center text-lg sm:text-xl md:text-2xl lg:text-4xl leading-snug ">
            Our mission is to help consumers find & acquire the things they'll love.
          </h2>
          <h2 className="font-bold text-center text-lg sm:text-xl md:text-2xl lg:text-4xl leading-snug ">
            We do this by curating the most accurate database of e-commerce knowledge, then delivering it through delightful digital consumer apps and AI experiences.
          </h2>
          <h2 className="font-bold text-center text-lg sm:text-xl md:text-2xl lg:text-4xl leading-snug ">
            Technologically, we bring together AI, decentralized community principles, and advanced engineering to solve hard problems and deliver differentiated user value.
          </h2>
        </div>
      </div>

        <div class="arrow-container text-center mt-[100px]">
          <button id="scroll-arrow" class="arrow-button animate-bounce " onClick={onScroll}>
            <img src="https://demand.io/img/icons/arrow_stem_scroll_indicator.svg"   alt="Scroll Down Arrow" class="arrow-image" />
          </button>
        </div>

      </div>
  )
}

export default HomeMainSection