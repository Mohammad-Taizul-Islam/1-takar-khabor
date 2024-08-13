// components/IconSwitchButton.js
"use client";
import React, { useState } from "react";
import Icon1 from "./Icon1";
import Icon2 from "./Icon2";

const IconSwitchButton = () => {
  const [isIcon1, setIsIcon1] = useState(true);

  const handleButtonClick = () => {
    setIsIcon1(!isIcon1);
  };

  return (
    <button
      onClick={handleButtonClick}
      className="flex items-center justify-center p-2 w-8 h-8 rounded full border-2 border-danger"
    >
      {isIcon1 ? <Icon1 /> : <Icon2 />}
      {/* You can add additional content inside the button if needed */}
    </button>
  );
};

export default IconSwitchButton;
