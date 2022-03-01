import React, { useRef, useState } from "react";
// Import Swiper React components
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import "swiper/css";
import "swiper/css/pagination";
import modelos1 from "../../public/img/modelos1.webp";
import modelos2 from "../../public/img/modelos2.webp";
import modelos3 from "../../public/img/modelos3.webp";
import modelos4 from "../../public/img/modelos4.webp";
import Image from "next/image";

export default function App() {
    SwiperCore.use([Pagination]);
    return (
        <div className="bg-light-gray p-8 text-center">
            <h2 className=" p-8 text-2xl font-bold text-black">MODELOS</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1100: {
                        slidesPerView: 4,
                    },
                }}
                pagination={{
                    el: ".my-custom-pagination-div",
                    clickable: true,
                    renderBullet: (index, className) => {
                        return '<span class="' + className + '">' + "</span>";
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image
                        src={modelos1}
                        alt="modelos1"
                        height={250}
                        width={250}
                    />
                    <p>Lorem Ipsum</p>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={modelos2}
                        alt="modelos2"
                        height={250}
                        width={250}
                    />
                    <p>Lorem Ipsum</p>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={modelos3}
                        alt="modelos3"
                        height={250}
                        width={250}
                    />
                    <p>Lorem Ipsum</p>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={modelos4}
                        alt="modelos4"
                        height={250}
                        width={250}
                    />
                    <p>Lorem Ipsum</p>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={modelos1}
                        alt="modelos1"
                        height={250}
                        width={250}
                    />
                    <p>Lorem Ipsum</p>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={modelos2}
                        alt="modelos2"
                        height={250}
                        width={250}
                    />
                    <p>Lorem Ipsum</p>
                </SwiperSlide>
            </Swiper>
            <div className="my-custom-pagination-div "></div>
        </div>
    );
}
