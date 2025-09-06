import React from "react";
import "./../index.css";
import void_logo from "./../assets/Void Society logo.svg";
export default function Navbar() {
  return (
    <div className="navbar_about">
      <img
        src={void_logo}
        alt="Logo"
        className="navbar_logo"
      />

      <div className="navbar_about_left">
        <a href="index.html" className="navbar_link">Home</a>
        <a href="about.html" className="navbar_link">About</a>
        <a href="contact.html" className="navbar_link">Contact</a>
      </div>

      <div className="navbar_about_right">
        <a href="login.html" className="navbar_link">Sign Up</a>
        <a href="signup.html" className="navbar_link">Login</a>
      </div>
    </div>
  );
}
