import video from "../assets/bgvideo.mkv";

const HeroSection = () => {
  return (
    <div className="flex flex-col item-center w-auto h-screen">

      <video
        className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 text-center p-6 mt-48">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide text-white drop-shadow-[0px_0px_10px_rgba(255,255,255,0.9)]">
          Innovating Bussiness with
          <span className="bg-gradient-to-r from-cyan-200 to-cyan-200 text-transparent bg-clip-text drop-shadow-[0_0_3px_rgba(13,189,203,0.9)]">
            {" "}
            Web-Integrated Ai Solutions
          </span>
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
