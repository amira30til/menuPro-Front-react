// NewLogo.js
import React from 'react';
import newLogoImage from './NewLogo.png'; 
const styleDuLogo = {
  width: '80px', // Adjust the width to make the logo smaller
  height: 'auto', // Maintain aspect ratio
};

const NewLogo = () => {
  return (
    <div>
      <img src={newLogoImage} alt="New Logo" style={styleDuLogo} />
    </div>
  );
};

export default NewLogo;
