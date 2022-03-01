import React from "react";
import Light from "../../public/img/light.svg";
interface propTypes {
    children?: any;
    icon?: boolean;
    className?: string;
}
function Card(props: propTypes): JSX.Element {
    if (props.icon) {
        return (
            <div className=" flex flex-col items-center justify-center bg-light-gray tracking-widest md:w-11/24 md:p-16">
                <h1 className="m-8  text-center text-2xl text-black">
                    <b>BENEFICIOS</b>
                </h1>
                <ul className=" mx-4 text-xl tracking-wider text-dark-gray">
                    <li className="item-center my-6 flex">
                        <Light className=" m-4 w-28" />
                        <span className="h-auto self-center ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </span>
                    </li>
                    <li className="item-center my-6 flex">
                        <Light className=" m-4 w-28" />
                        <span className="h-auto self-center ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </span>
                    </li>
                    <li className="item-center my-6 flex">
                        <Light className=" m-4 w-28" />
                        <span className="h-auto self-center ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </span>
                    </li>
                </ul>
            </div>
        );
    }
    return (
        <div className=" flex flex-col items-center justify-center bg-light-gray tracking-widest md:w-11/24 md:p-16">
            <h1 className="m-8  text-center text-2xl text-black">
                <b>PASOS</b>
            </h1>
            <ul className=" mx-4 text-xl tracking-wider text-dark-gray">
                <li className="item-center my-6 flex">
                    <h1 className=" text-5xl font-bold text-yellow md:m-4">
                        1
                    </h1>
                    <span className="h-auto self-center ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                </li>
                <li className="item-center my-6 flex">
                    <h1 className="text-5xl font-bold text-yellow md:m-4">2</h1>
                    <span className="h-auto self-center ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                </li>
                <li className="item-center my-6 flex">
                    <h1 className="text-5xl font-bold text-yellow md:m-4">3</h1>
                    <span className="h-auto self-center ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default Card;
