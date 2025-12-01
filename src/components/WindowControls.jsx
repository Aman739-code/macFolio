import useWindowStore from "#store/window";
import React, { useState } from "react";
import { X } from "lucide-react";

const WindowControls = ({ target }) => {
  const { closeWindow } = useWindowStore();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div id="window-controls">
      <div 
        className="close" 
        onClick={() => closeWindow(target)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          position: 'relative',
          transition: 'all 0.3s ease'
        }}
      >
        <X 
          size={16} 
          color="#8B0000" 
          strokeWidth={2.5}
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(-90deg)',
            transition: 'all 0.3s ease'
          }}
        />
      </div>
    </div>
  );
};

export default WindowControls;