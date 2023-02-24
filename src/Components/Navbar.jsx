import React from "react";
import { NavLink } from "react-router-dom";


export const Navbar = () => {
    return (
        <div className="flex justify-between align-middle bg-slate-100">
            
                
            <NavLink
                to="/"
                className=" flex items-center  mt-2 ml-2  font-Monserrat text-md text-semibold z-10 sm:text-2xl"
            >
               <img
                        src={require("../Assets/programacion.png")}
                        alt="code"
                        className="h-6 mr-4"
                    />
                Portfolio
            </NavLink>
           

            <div className="mt-2 z-10">
                <NavLink
                    to="projects"
                    className="mr-5  font-Monserrat text-md  hover:text-yellow-400 sm:text-lg text-semibold"
                >
                    Projects
                </NavLink>
                <NavLink
                    to="contact"
                    className="mr-5  font-Monserrat text-md  hover:text-yellow-400 sm:text-lg text-semibold"
                >
                    Contact
                </NavLink>
            </div>
        </div>
    );
};
