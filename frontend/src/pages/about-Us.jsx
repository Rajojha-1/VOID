import React from 'react';
import Navbar from '../components/navbar';

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="about-us-container">
        <h1>About Us</h1>
        <p>Welcome to the about us section. Here you can learn more about our team and mission.</p>
      </div>
    </>
  );
}
