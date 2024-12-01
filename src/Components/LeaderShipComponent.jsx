import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../Motion/Varients';
const LeaderShipComponent = ({ text1, text2, text3, Subtitle, title, reverseLayout, img,id }) => {
    return (
         
                   <div
                className={`grid ${reverseLayout
                    ? 'md:grid-cols-2 md:grid-rows-1 md:items-start md:gap-x-10 grid-rows-[auto_auto]'
                    : 'md:grid-cols-2 md:grid-rows-1 md:items-start md:gap-x-10 grid-rows-[auto_auto]'
                    } gap-y-10`}
            >
                <motion.div
                    className={`${reverseLayout ? 'lg:order-2 md:order-1 sm:order-1   ' : 'order-1 '
                        } flex justify-center`}
                    variants={fadeIn("up", 0)}
                    initial='hidden'
                    whileInView={"show"}
                    layout
                    viewport={{ once: false, amount: 0 }}

                >
                    <img
                        src={img}
                        alt={title}
                        className="rounded-lg shadow-lg object-cover w-full max-w-[538px] max-h-[673px]"
                    />
                </motion.div>

                <div
                    className={`${reverseLayout ? 'lg:order-1 md:order-2 sm:order-2  ' : 'order-2 '
                        } text-left space-y-6`}
                >
                    <div>
                        <p className="text-sm font-bold  uppercase">
                            {Subtitle}
                        </p>
                        <h2 className="text-3xl font-bold  leading-tight">
                            {title}
                        </h2>
                    </div>
                    <p className=" leading-relaxed">{text1}</p>
                    <p className=" leading-relaxed">{text2}</p>
                    <p className=" leading-relaxed">{text3}</p>

                    <a
                        href="/careers/spotlight/michael-quoc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" font-medium inline-flex items-center space-x-1 hover:underline hover:text-[rgb(253,0,0)]"
                    >
                        <span>Read more about Mike</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            viewBox="0 0 19 17"
                            className="w-4 h-4"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                d="M12.4441312,2.67449294 L18.6373067,9.94478619 C18.8433484,10.1891956 18.8433484,10.5854615 18.6373067,10.8298709 L12.4441312,18.2425164 M18.219766,10.3873285 L1.20816201,10.3873285"
                                transform="translate(-1 -2)"
                            />
                        </svg>
                    </a>
                </div>
            </div>
    );
};

export default LeaderShipComponent;
