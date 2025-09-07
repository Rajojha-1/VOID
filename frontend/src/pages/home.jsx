import React from "react";
import kali from "./../assets/web.svg";
import Navbar from "./../components/navbar";
import { useRef } from "react";

function GlowingButton() {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // update CSS variables dynamically
    btnRef.current.style.setProperty("--x", `${x}px`);
    btnRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <button
      ref={btnRef}
      className="about-button mt-6 bg-blue-500 text-white px-4 py-2 rounded"
      onMouseMove={handleMouseMove}
    >
      Get Started
    </button>
  );
}

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
        {/* glowing button */}
       <GlowingButton />
  </div>
</div>



{/* testing tailwind */}
{/* <div className="bg-blue-500 text-green-500 p-4 m-4 rounded-lg shadow-lg">
  This div should have a blue background, white text, padding, margin, rounded corners, and a shadow if Tailwind is working correctly.
</div> */}




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


{/* IRC Section */}
<div className="irc-section">
  <div className="irc-panel-container">
    {/* IRC client will go here */}
    <div className="irc-panel"></div>
  </div>
  <div className="irc-text-container">
    <h2 className="irc-heading">Join our IRC Channel</h2>
    <p className="irc-description max-w-[30ch]">
    And be part of our vibrant community. Connect, collaborate, and share your passion for cybersecurity with like-minded individuals.

</p>
  </div>
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
