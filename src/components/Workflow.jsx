import React from "react";
import Slider from "react-slick";
import codeImg from "../assets/bigdata.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Ensure the slick CSS is included
import qoute from "../assets/image2.png";
import robot from "../assets/robot.jpeg";
import video from "../assets/AIVideo.mp4"

const Workflow = () => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    speed: 2000,
    dots: true,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    autoplay: false, // Enable auto-scrolling
    autoplaySpeed: 2000,
  };

  return (
    <div className="mt-20 " id="future">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Future of{" "}
        <span className="bg-gradient-to-r  from-teal-300 to-teal-300 text-transparent bg-clip-text">
          Development
        </span>
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10">
        <div class="h-[300px] sm:h-[500px]">
          <img class="w-full h-full object-cover rounded-lg shadow-[-10px_10px_25px_rgba(255,255,255,1)]" src={qoute} alt="" />
        </div>
        <div class="h-[300px] sm:h-[500px]">
          <video
            class="w-full h-full object-cover "
            src={video}
            autoPlay
            muted
            loop
          >
            Your browser does not support the video tag.
          </video>
        </div>

      </div>
      

    </div>
  );
};

export default Workflow;
