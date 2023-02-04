import React from "react";
import { MyCard } from "./MyCard";
import "../Styles/Home.css";
import { NavLink } from "react-router-dom";

export const Home = () => {
    return (
        <div className="  xsm:block sm:block  md:flex lg:flex xl:flex 2xl:flex align-middle items-center xsm:mt-0 xsm:align-middle  sm:mt-24  md:mt-32 lg:mt-52 xl:mt-52 2xl:mt-52   2xl:w-full">
            
            <MyCard />
            <div className="sm:mt-16 md:mt-0  md:w-2/5  lg:w-2/5  xl:w-2/5   text-center sm:text-center md:text-center   md:ml-20 lg:ml-24 xl:ml-24 2xl:w-2/5" >

                <h1 className=" xsm:ml-6 capitalize font-Monserrat font-bold text-start xsm:mt-4 sm:mt-8 xsm:text-center sm:text-center  md:text-start  text-xl  md:text-2xl lg:text-3xl   xl:text-4xl 2xl:text-4xl">
                    Hello
                </h1>
                <p className=" text-start mt-2 xsm:mt-2  sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl xsm:text-center md:text-start sm:text-center xl:w-auto  ">
                    I  web developer, with a passion for translating your
                    ideas and turning them into reality, to help you solve your
                    problems with the latest technologies. I love learning new
                    Talents and keep developing on this path as a programmer.
                </p>
            </div>

            <div className="curve"></div>


            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute xsm:bottom-0 sm:bottom-0  md:bottom-0 lg:bottom-0 xl:bottom-0 2xl:bottom-0" >
                <path
                    fill="#ffd700"
                    fill-opacity="2"
                    d="M0,96L60,128C120,160,240,224,360,218.7C480,213,600,139,720,90.7C840,43,960,21,1080,26.7C1200,32,1320,64,1380,80L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                ></path>
            </svg>

            <NavLink  className=".eventoBtn font-Monserrat z-10 absolute bottom-0 left-2/4 xsm:left-1/2    mb-4 animate-bounce " to="projects"><img src={require('../Assets/caret-abajo.png')} alt='imagen-flecha' className="h-5"/></NavLink>
        
            
        </div>
    );
};

/* Vector 1 */
