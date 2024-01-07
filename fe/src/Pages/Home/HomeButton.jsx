// YourButton.jsx

import React from 'react';
import './HomeButtonStyle.css'; // Import your CSS file
import { KeyboardArrowRight } from '@mui/icons-material';
const YourButton = () => {
  return (
    <a href="javascript:;" className="your-button">
      <KeyboardArrowRight className="icon-arrow before" />
      <span className="label">Check This Out</span>
      <KeyboardArrowRight className="icon-arrow after" />
    </a>
  );
};

export default YourButton;
