import { useState } from "react";
import heroVideo from "../../assets/Video/HeroVideo.mp4";
import Loading from "../common/Loading";

const Video = ({ rounded }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative h-full w-full">
      {isLoading && <Loading />}
      <video
        autoPlay
        loop
        muted
        className={`h-full w-full object-cover ${
          rounded ? "rounded-full" : ""
        } ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500`}
        src={heroVideo}
        preload="auto"
        disablePictureInPicture
        controlsList="nofullscreen nodownload noremoteplayback noplaybackrate nofullscreen"
        playsInline
        onLoadedData={() => setIsLoading(false)}
      ></video>
    </div>
  );
};
export default Video;
