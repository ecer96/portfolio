import React from "react";
import { NavLink } from "react-router-dom";


export const Navbar = () => {
    return (
        <div className="flex justify-between align-middle bg-slate-100">
            <div>
                
            <NavLink
                to="/"
                className=" flex items-center  mt-2 ml-5  font-Monserrat text-xs  sm:text-sm  md:text-base lg:text-lg xl:text-xl 2xl:text-2xl z-10"
            >
               <img
                        src={require("../Assets/programacion.png")}
                        alt="code"
                        className="h-6 mr-4"
                    />
                Portfolio
            </NavLink>
            </div>

            <div className="mt-2 z-10">
                <NavLink
                    to="projects"
                    className="mr-5  font-Monserrat text-xs  sm:text-sm  md:text-base lg:text-lg xl:text-xl 2xl:text-xl 2xl:mr-14 xsm:hover:text-yellow-400 sm:hover:text-yellow-400 md:hover:text-yellow-400 lg:hover:text-yellow-400 xl:hover:text-yellow-400 2xl:hover:text-yellow-500"
                >
                    Projects
                </NavLink>
                <NavLink
                    to="contact"
                    className="mr-5  font-Monserrat text-xs  sm:text-sm  md:text-base lg:text-lg xl:text-xl 2xl:text-xl 2xl:mr-14  xsm:hover:text-yellow-400 sm:hover:text-yellow-400 md:hover:text-yellow-400 lg:hover:text-yellow-400 xl:hover:text-yellow-400 2xl:hover:text-yellow-500 "
                >
                    Contact
                </NavLink>
            </div>
        </div>
    );
};
