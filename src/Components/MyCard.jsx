import React from "react";

export const MyCard = () => {
    return (
        <div className="flex items-center justify-center   mt-8 ml-4 xsm:justify-center xsm:mt-12 sm:justify-center sm:mt-12   md:w-2/5  md:justify-start    2xl:w-80 ">
            <div className=" ml-2 align-middle w-full xl:w-full">
                <div className="flex justify-center z-10">
                    <img
                        src={require("../Assets/yo2.jpg")}
                        alt="mi-imagen"
                        className="rounded-full w-36 h-32 object-cover"
                    />
                </div>
                
                <h4 className="font-Monserrat text-center mt-4  xsm:text-base  sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl font-bold">
                 
                 
                    Edwin Cervantes
                </h4>

                <div className="flex justify-center mt-2">
                    <a
                        href="https://www.facebook.com/edwinmartin.cervantesacosta"
                        className=""
                    >
                        <img
                            className="h-5 mx-2 xsm:hover:scale-125 sm:hover:scale-125 md:hover:scale-125 lg:hover:scale-125 xl:hover:scale-125 2xl:hover:scale-125 "
                            src={require("../Assets/simbolo-de-la-aplicacion-de-facebook.png")}
                            alt="icono-fb"
                        />
                    </a>
                    <a href="https://github.com/ecer96" className="">
                        <img
                            className="h-5 mx-2  xsm:hover:scale-125 sm:hover:scale-125 md:hover:scale-125 lg:hover:scale-125 xl:hover:scale-125 2xl:hover:scale-125"
                            src={require("../Assets/github.png")}
                            alt="icono-git"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/edwin--cervantes/"
                        className=""
                    >
                        <img
                            className="h-5 mx-2  xsm:hover:scale-125 sm:hover:scale-125 md:hover:scale-125 lg:hover:scale-125 xl:hover:scale-125 2xl:hover:scale-125"
                            src={require("../Assets/linkedin.png")}
                            alt="icono-linkedin"
                        />
                    </a>
                    <a href="https://wa.me/526221154033?text=Hi" className="">
                        <img
                            className="h-5 mx-2  xsm:hover:scale-125 sm:hover:scale-125 md:hover:scale-125 lg:hover:scale-125 xl:hover:scale-125 2xl:hover:scale-125"
                            src={require("../Assets/whatsapp.png")}
                            alt="icono-linkedin"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};
