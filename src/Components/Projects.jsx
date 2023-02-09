import React from "react";

export const Projects = () => {
    return (
        <div className="mx-5">
            <h4 className=" font-Monse  text-2xl xl:text-3xl 2xl:text-4xl font-bold ml-5 mt-12">
                Projects
            </h4>
            <hr class="h-px my-4 w-2/5 mx-5  border-0 bg-amber-500 mb-20" />
            
            <div className="grid grid-cols-3 xsm:block gap-2">
                <div className="flex hover:scale-125">
                    <a href="https://ecer96.github.io/MyStore">
                        <img
                            src={require("../Assets/MyStore.png")}
                            alt="page-1"
                            className="h-44 bg-cover md:h-52 lg:h-64 xl:h-72 2xl:h-80"
                        ></img>
                    </a>
                </div>

                <div className="flex hover:scale-125 ">
                    <a href="https://ecer96.github.io/movies-online/">
                        <img
                            src={require("../Assets/moviesweb.png")}
                            alt="page-1"
                            className="h-44 bg-cover md:h-52 lg:h-64 xl:h-72 2xl:h-80"
                        ></img>
                    </a>
                </div>
                
                <div className="flex hover:scale-125 ">
                    <a href="https://ecer96.github.io/pagina-nutricion/home">
                        <img
                            src={require("../Assets/paginaNut.png")}
                            alt="page-1"
                            className="h-44 bg-cover md:h-52 lg:h-64 xl:h-72 2xl:h-80"
                        ></img>
                    </a>
                </div>

                <div className="flex hover:scale-125 ">
                    <a href="https://ecer96.github.io/app-calculo-almacen/">
                        <img
                            src={require("../Assets/calculo.png")}
                            alt="page-1"
                            className="h-44 bg-cover md:h-52 lg:h-64 xl:h-72 2xl:h-80"
                        ></img>
                    </a>
                </div>

            </div>
        </div>
    );
};
