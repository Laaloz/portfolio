import React from "react";
import VideoPlayer from "react-video-js-player";
import shopify from "../Videos/shopifyVideo.m4v";
import shopifyImg from "../images/shopifyImg.png";
import "../Video.scss";

const VideoJS = () => {
    const videoSrc = shopify;
    const poster = shopifyImg;
    return (
        <div className="videoApp">
            <h1 className="otsikko">Shopify shop demo</h1>
            <VideoPlayer
                src={videoSrc}
                poster={poster}
                width="720"
                height="420"
                playbackRates={[0.5, 1, 3.85, 16]}
            />
        </div>
    );
};

export default VideoJS;
