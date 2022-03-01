import React from "react";

function Banner(): JSX.Element {
    return (
        <div className=" bg-banner bg-cover bg-top  text-white ">
            <div className=" h-full   bg-black bg-opacity-50 ">
                <div className=" flex flex-col items-center justify-between p-8 py-8 md:flex-row lg:mx-8">
                    <div className="md:w-11/24 ">
                        <h2 className="my-8 text-center text-3xl tracking-widest md:text-left md:text-5xl  ">
                            <span className="font-bold text-yellow">
                                COTIZA
                            </span>{" "}
                            EN SOLO 1 DÍA la solución <b>Strip Line</b>
                        </h2>
                    </div>
                    <button className="rounded-full border-2 border-yellow bg-transparent py-4 px-8 text-2xl font-bold tracking-wider md:text-4xl">
                        Cotiza YA
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Banner;
