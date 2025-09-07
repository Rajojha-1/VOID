import React from "react";
import kali from "./../assets/web.svg";
import Navbar from "./../components/navbar";
export default function VoidPage() {
  return (
    <div className="">
      <Navbar />
      {/* About Description */}
<div className="about_desc z-30">
  <div className="about-club ">
    <h1 className="about-club-h1 ">
      Enter into the Cyber Arena with VOID
    </h1>
    <p className="text-sm text-white  max-w-[60ch] ">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      nemo soluta totam commodi atque quod! Culpa quo consectetur quae
      ipsam.
    </p>
        <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded">
      Get Started
    </button>
  </div>
</div>


      {/* Kali SVG */}
      <div className="kali_svg_div">
      <img src={kali} alt="kali" className="kali_svg" />
      </div>
      {/* Spotlight */}
      <div className="spotlight">
        <img
          className="spotlight-svg-top"
          src="/assets/0f9e183a12bee7af6da9f9a175c71d3a.svg"
          alt=""
        />
        <img
          className="spotlight-svg-bottom"
          src="/assets/e4c3a7bd600393b1420b0ffef056534d.svg"
          alt=""
        />
        <div className="spotlight_chupao"></div>
      </div>

      {/* Kali Distro Overview */}
      <div className="kali_distro_overview z-10 absolute top-[110%] left-[10%] w-[65%] h-auto flex justify-center items-center rounded-xl overflow-hidden shadow-lg">
        <video
          src="/assets/video/distro.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>

      {/* About Us */}
      <div className="about_us bg-[#f5f5f6] text-black w-full h-[240px] flex justify-center items-center text-2xl font-poppins">
        <p className="about_element">
          Join the Centre of Excellence for Cybersecurity and uncover the truth
          about security.
        </p>
      </div>
    </div>
  );
}
