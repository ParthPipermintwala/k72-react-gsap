import heroVideo from "../../assets/Video/HeroVideo.mp4";

const Video = ({ rounded }) => {
  return (
    <video
      autoPlay
      loop
      muted
      className={`h-full w-full object-cover ${rounded ? "rounded-full" : ""}`}
      src={heroVideo}
      preload="none"
      disablePictureInPicture
      controlsList="nofullscreen nodownload noremoteplayback noplaybackrate nofullscreen"
      playsInline
    ></video>
  );
};
export default Video;
