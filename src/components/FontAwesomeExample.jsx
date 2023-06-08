import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import {faTiktok } from '@fortawesome/free-brands-svg-icons';
const FontAwesomeExample = () => {
  const svgStyle = {
    fill: "blue", // Set the SVG color to red
    height:"20",
    width:"30",
    marginRight: '10px', 
  };
  const iconStyle = {
    color: 'black', // Set the desired color
  };

  return (
    <div>
      <div>
      
      <a href="https://www.facebook.com/mms.balti/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebook} style={svgStyle} />
    </a>
    <a href="https://www.facebook.com/mms.balti/" target="_blank" rel="noopener noreferrer">

      <FontAwesomeIcon icon={faTiktok}  style={svgStyle} /> </a>
</div>
    </div>
  );
};

export default FontAwesomeExample;
