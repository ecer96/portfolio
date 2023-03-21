import React from "react";

export const Projects = () => {
    return (
        <div className="mx-5">
            <h4 className=" font-Monse text-2xl font-bold mt-8">Projects</h4>
            <hr class="h-px my-2 w-2/5   border-0 bg-amber-500 mb-20" />

            <div className="sm:grid sm:grid-cols-3 md:ml-28 ml-5 gap-1 xl:ml-2 xl:gap-9">

            <div className="flex hover:scale-125 justify-center">
                    <div>
                        <h4 className="font-bold text-lg text-center  capitalize mt-8 text-amber-400">
                            Restaurant Site
                        </h4>
                        <a href="http://restaurantmvc-prod.us-west-2.elasticbeanstalk.com/">
                            <img
                                src={require("../Assets/Restaurant.png")}
                                alt="page-2"
                                className="h-32 bg-cover  mt-8 sm:h-48 sm:w-96  md:h-72 md:w-full  md:mb-20  xl:h-30"
                            ></img>
                        </a>
                    </div>
                </div>

               
                <div className="flex hover:scale-125 justify-center">
                    <div>
                        <h4 className="font-bold text-lg text-center capitalize mt-8  text-amber-400 xl:h-30">
                            Movies Web page
                        </h4>
                        <a href="https://ecer96.github.io/movies-online">
                            <img
                                src={require("../Assets/moviesweb.png")}
                                alt="page-1"
                                className=" h-32 bg-cover  mt-8 sm:h-48 sm:w-96  md:h-72 md:w-full md:mb-20 "
                                
                            ></img>
                        </a>
                    </div>
                </div>

                <div className="flex hover:scale-125 justify-center">
                    <div>
                        <h4 className="font-bold text-lg text-center  capitalize mt-8  text-amber-400 xl:h-30">
                            Virtual Card
                        </h4>
                        <a href="https://ecer96.github.io/my_card/">
                            <img
                                src={require("../Assets/my_card.png")}
                                alt="page-2"
                                className="h-32 bg-cover  mt-8 sm:h-48 sm:w-96  md:h-72 md:w-full  md:mb-20 "
                            ></img>
                        </a>
                    </div>
                </div>

                <div className="flex hover:scale-125 justify-center">
                    <div>
                        <h4 className="font-bold text-lg text-center capitalize mt-8  text-amber-400 xl:h-30">
                            E-Commerce
                        </h4>
                        <a href="https://ecer96.github.io/MyStore">
                            <img
                                src={require("../Assets/MyStore.png")}
                                alt="page-3"
                                className="h-32 bg-cover mt-8 sm:h-48 sm:w-96 md:h-72 md:w-full  md:mb-20 "
                            ></img>
                        </a>
                    </div>
                </div>

                    <div className="flex hover:scale-125 justify-center">
                <div>
                    <h4 className="font-bold text-lg text-center capitalize mt-8  text-amber-400 xl:h-30">
                        Nutritional-page
                    </h4>
                        <a href="https://ecer96.github.io/pagina-nutricion/home">
                            <img
                                src={require("../Assets/paginaNut.png")}
                                alt="page-4"
                                className="h-32 bg-cover  mt-8 sm:h-48 sm:w-96 md:h-72 md:w-full md:mb-20 "
                            ></img>
                        </a>
                    </div>
                </div>

                <div className="flex hover:scale-125 justify-center">
                    <div>
                        <h4 className="font-bold text-lg text-center capitalize mt-8  text-amber-400 xl:h-30">
                            Store Calculator
                        </h4>
                        <a href="https://ecer96.github.io/app-calculo-almacen/">
                            <img
                                src={require("../Assets/calculo.png")}
                                alt="page-5"
                                className="h-32 bg-cover mt-8 sm:h-96 md:h-72 md:w-full  md:mb-20  "
                            ></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
