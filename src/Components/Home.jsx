import React from "react";
import { MyCard } from "./MyCard";
import "../Styles/Home.css";
import { NavLink } from "react-router-dom";

export const Home = () => {
    return (
        <div className="">
            <MyCard />

            <h1 className="text-center text-lg font-bold mt-4 ml-4 sm:mt-8 sm:text-2xl xl:mt-14  ">
                Hello!
            </h1>

            <p className=" text-center px-42 mt-4 sm:px-36 xl:px-72 xl:text-lg">
                I web developer, with a passion for translating your ideas and
                turning them into reality, to help you solve your problems with
                the latest technologies. I love learning new Talents and keep
                developing on this path as a programmer.
            </p>

            <div className="curve"></div>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="fixed bottom-0"
            >
                <path
                    fill="#ffd700"
                    fill-opacity="2"
                    d="M0,96L60,128C120,160,240,224,360,218.7C480,213,600,139,720,90.7C840,43,960,21,1080,26.7C1200,32,1320,64,1380,80L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                ></path>
            </svg>

            <NavLink
                className=".eventoBtn font-Monserrat z-10 absolute bottom-0 left-2/4 xsm:left-1/2    mb-4 animate-bounce "
                to="projects"
            >
                <img
                    src={require("../Assets/caret-abajo.png")}
                    alt="imagen-flecha"
                    className="h-5"
                />
            </NavLink>
        </div>
    );
};

/* Vector 1 */
