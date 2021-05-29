import React from "react";
import VideoPlayer from "react-video-js-player";
import shopify from "../Videos/shopifyVideo.m4v";

const VideoJS = () => {
    const videoSrc = shopify;
    const poster =
        "https://cdn.shopify.com/screenshots/shopify/xyz5gjfkb2lo2k6j8o2agifxrbuzus4-56602394790.shopifypreview.com?height=900&version=fae642993b05a98d530a03d823c5e8772411c3e18bfdbe8f9d5a27b85b6c59e4&width=1160";

    return (
        <div className="videoApp">
            <h1>Shopify shop demo</h1>
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
