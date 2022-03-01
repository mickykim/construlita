import React from "react";

function Personaliza(): JSX.Element {
    return (
        <div className="bg-banner bg-cover bg-center md:h-personaliza">
            <div className="h-full  bg-black bg-opacity-75 ">
                <div className="flex h-full max-w-6xl flex-col flex-wrap items-center justify-between md:flex-row md:pt-8 lg:mx-auto lg:px-4  ">
                    <h2 className="w-full bg-transparent p-8 text-center text-3xl font-bold tracking-widest text-white">
                        PERSONALIZA AQUÍ TU SOLUCIÓN{" "}
                        <span className="text-yellow">STRIP LINE</span>
                    </h2>
                    <input
                        placeholder="Aplicación"
                        className="m-4 max-h-16 w-4/5 rounded-3xl bg-white p-4 md:w-11/24"
                    ></input>
                    <input
                        placeholder="Temperatura de color"
                        className="m-4 max-h-16 w-4/5 rounded-3xl bg-white p-4 md:w-11/24"
                    ></input>
                    <input
                        placeholder="Modelo Strip Line"
                        className="m-4 max-h-16 w-4/5 rounded-3xl bg-white p-4 md:w-11/24"
                    ></input>
                    <input
                        placeholder="Longitud"
                        className="m-4 max-h-16 w-4/5 rounded-3xl bg-white p-4 md:w-11/24"
                    ></input>
                    <input
                        placeholder="Instalación"
                        className="m-4 max-h-16 w-4/5 rounded-3xl bg-white p-4 md:w-11/24"
                    ></input>
                    <button className="m-4 max-h-16 rounded-full border-2 border-yellow p-4 font-bold text-white">
                        PERSONALIZA
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Personaliza;
