import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner";
import Card from "../components/card";
import Spacer from "../components/spacer";
import Logo from "../public/img/logo.svg";
import useInView from "react-cool-inview";
import Carousel from "../components/carousel";

const Video = dynamic(() => import("../components/video"));
const Personaliza = dynamic(() => import("../components/personaliza"));

const Home: NextPage = () => {
    const { observe, unobserve, inView, scrollDirection, entry } = useInView({
        threshold: 0.25, // Default is 0
        onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
            // Triggered when the target enters the viewport
            unobserve();
        },
    });
    return (
        <div className="flex h-full flex-col">
            <Head>
                <title>Construlita</title>
                <meta name="" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col ">
                <div className="h-hero bg-hero bg-cover bg-fixed bg-center ">
                    <div className="flex h-full w-full flex-col justify-center bg-black bg-opacity-50 px-8 text-center align-middle md:px-44 ">
                        <Logo className="absolute top-10  left-0 right-0 mx-auto h-auto w-72 bg-transparent text-slate-400 backdrop-brightness-50 lg:top-10 lg:w-72"></Logo>
                        <h1 className="m-8 text-4xl  text-white  lg:text-5xl">
                            <span className="text-yellow">
                                <b>
                                    PERSONALIZA
                                    <br />
                                    la iluminación
                                </b>{" "}
                            </span>
                            de tu proyecto
                        </h1>
                        <h2 className="text-white  lg:text-2xl">
                            Te ofrecemos el <b>soporte</b> para lograr la{" "}
                            <b>aplicación correcta</b> de acuerdo con la
                            necesidad del proyecto. Es por eso que, le brindamos
                            las herramientas necesarias para <b>personalizar</b>{" "}
                            las{" "}
                            <b>
                                soluciones de iluminación{" "}
                                <span className="text-yellow">Strip Line</span>
                            </b>
                            , Una que brindará valor agregado a…
                        </h2>{" "}
                    </div>
                </div>
                <Spacer />
                <div className="mx-4 flex max-w-6xl flex-col text-dark-gray md:mx-8 lg:mx-auto">
                    <div className="text-center text-2xl tracking-wider">
                        <h2>
                            Strip Line es la solución para iluminar distintos
                            espacios en segmento de{" "}
                            <b className="text-black">
                                hospitalidad, oficinas y comerciales.
                            </b>{" "}
                            Gracias a su versatilidad, se pueden adaptar a
                            diferentes aplicaciones decorativas y funcionales
                            presentes en la arquitectura y el diseño interior.
                        </h2>
                    </div>
                    <Spacer />
                    <div className="" ref={observe}>
                        {inView && <Video />}
                    </div>
                    <Spacer />
                    <div className="flex flex-col justify-between md:flex-row">
                        <Card icon={true} />
                        <Card />
                    </div>
                    <Spacer />
                    <Carousel />
                    <Spacer />
                    <Banner />
                </div>
                <Spacer />
                <Personaliza />
            </main>

            <footer className="h-24 bg-yellow p-4 text-center text-sm text-black">
                Construlita Lighting International S.A. de C.V.
                <br /> Todos los derechos reservados © 2022
            </footer>
        </div>
    );
};

export default Home;
