import React from 'react';
import logo from '@site/static/img/stone-egg-transparent.png'; // Tell webpack this JS file uses this image

function Hero() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

export default Hero;
