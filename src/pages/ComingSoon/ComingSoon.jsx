import React from 'react'; // Import React
import './ComingSoon.css';
import rocketImg from '@assets/rocket.png';
import appLogo from '@assets/app-logo.png';

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <div className="content">
        <img src={appLogo} alt="App Logo" className="app-logo" />
        <h1 className="coming-soon-title">
          Launching <span style={{ fontSize: '42px', fontWeight: 'bold', color: '#e53935' }}>soon</span>!
        </h1>
        <p className="description">
          Stay tuned as we add the final ingredients to MenuPro! Prepare to embark on a quest for the perfect dining spot–
          where taste meets memories and every bite tells a story.
        </p>
        <img src={rocketImg} alt="Rocket" className="rocket-image" />
      </div>
    </div>
  );
};

export default ComingSoon;
