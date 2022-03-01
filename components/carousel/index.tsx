import React, { useEffect, useState } from "react";
import Glide, { Options } from "@glidejs/glide";
import modelos1 from "../../public/img/modelos1.png";
import modelos2 from "../../public/img/modelos2.png";
import modelos3 from "../../public/img/modelos3.png";
import modelos4 from "../../public/img/modelos4.png";
import Image from "next/image";

const sliderConfig: Options = {
    gap: 20,
    perView: 4,
    type: "carousel",
    startAt: 2,
    breakpoints: {
        480: {
            perView: 1,
        },
        800: {
            perView: 2,
            focusAt: 1,
        },
    },
    focusAt: 2,
};

function Carousel(): JSX.Element {
    const slider = new Glide(".glide", sliderConfig);
    const [activeBullet, setActiveBullet] = useState("0");

    function updateBullet(e) {
        const id = e.target.id;
    }
    useEffect(() => {
        slider.mount();
    }, [slider]);

    return (
        <>
            <div className="glide bg-light-gray">
                <h2 className="m-16 text-center text-2xl font-bold tracking-widest text-black">
                    MODELOS
                </h2>
                <div className="glide__track m-8 h-80" data-glide-el="track">
                    <ul className="glide__slides text-center text-lg">
                        <li className="glide__slide slider ">
                            <Image
                                src={modelos1}
                                alt="modelos1"
                                height="250"
                                width="250"
                            />
                            <p>Lorem Ipsum</p>
                        </li>
                        <li className="glide__slide slider">
                            <Image
                                src={modelos2}
                                alt="modelos2"
                                height="250"
                                width="250"
                            />
                            <p>Lorem Ipsum</p>
                        </li>
                        <li className="glide__slide slider">
                            <Image
                                src={modelos3}
                                alt="modelos3"
                                height="250"
                                width="250"
                            />
                            <p>Lorem Ipsum</p>
                        </li>
                        <li className="glide__slide slider">
                            <Image
                                src={modelos4}
                                alt="modelos4"
                                height="250"
                                width="250"
                            />
                            <p>Lorem Ipsum</p>
                        </li>
                        <li className="glide__slide slider ">
                            <Image
                                src={modelos1}
                                alt="modelos1"
                                height="250"
                                width="250"
                            />
                            <p>Lorem Ipsum</p>
                        </li>
                        <li className="glide__slide slider">
                            <Image
                                src={modelos2}
                                alt="modelos2"
                                height="250"
                                width="250"
                            />
                            <p>Lorem Ipsum</p>
                        </li>
                        <li className="glide__slide slider">
                            <Image
                                src={modelos3}
                                alt="modelos3"
                                height="250"
                                width="250"
                            />
                            <p>Lorem Ipsum</p>
                        </li>
                        <li className="glide__slide slider">
                            <Image
                                src={modelos4}
                                alt="modelos4"
                                height="250"
                                width="250"
                            />
                            <p>Lorem Ipsum</p>
                        </li>
                    </ul>
                </div>

                <div
                    className="slider__bullets glide__bullets "
                    data-glide-el="controls[nav]"
                >
                    <button
                        className="slider__bullet glide__bullet border-2 border-dark-gray "
                        data-glide-dir="=3"
                        id="0"
                    ></button>
                    <button
                        className="slider__bullet glide__bullet border-2 border-dark-gray"
                        data-glide-dir="=5"
                        id="1"
                    ></button>
                </div>
            </div>
        </>
    );
}

export default Carousel;
