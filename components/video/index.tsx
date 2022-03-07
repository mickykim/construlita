import Image from "next/image";
import React, { useState } from "react";
import PlayButton from "../../public/img/play.svg";
function Video() {
    const [showImage, setShowImage] = useState(true);
    const [showVideo, setShowVideo] = useState(false);

    function setImageFalse() {
        setShowImage(false);
        setShowVideo(true);
    }
    return (
        <div className=" relative flex aspect-video w-full">
            <div
                className={`absolute aspect-video w-full bg-video bg-cover bg-center ${
                    showImage ? "" : "hidden"
                }`}
                onClick={setImageFalse}
            >
                <div className="flex aspect-video items-center justify-center bg-black bg-opacity-50">
                    <PlayButton className="m-8" />
                </div>
            </div>
            {showVideo && (
                <iframe
                    src="https://www.youtube.com/embed/38YFMI27NFc?autoplay=1"
                    frameBorder="0"
                    allowFullScreen
                    width="1420"
                    height="795"
                    title="video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    className={`absolute aspect-video h-full w-full`}
                />
            )}
        </div>
    );
}

export default Video;
