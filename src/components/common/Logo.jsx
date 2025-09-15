import React from 'react';

const Logo = ({ className = "", width = 200, height = 60 }) => {
  return (
    <div 
      className={`flex items-center gap-3 ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {/* Curved swoosh graphic - exact match to your design */}
      <div className="relative">
        <svg 
          width="50" 
          height="50" 
          viewBox="0 0 50 50" 
          className="flex-shrink-0"
        >
          {/* Thick teal section on the left */}
          <path 
            d="M8 25 C 8 12, 20 8, 32 12" 
            stroke="#00D4AA" 
            strokeWidth="6" 
            fill="none" 
            strokeLinecap="round"
          />
          {/* Thin grey section on the right */}
          <path 
            d="M32 12 C 38 14, 42 20, 38 25 C 34 30, 26 28, 18 25" 
            stroke="#666666" 
            strokeWidth="3" 
            fill="none" 
            strokeLinecap="round"
          />
        </svg>
      </div>
      
      {/* Text - exact match to your design */}
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className="text-[#00D4AA] font-bold italic text-2xl">AI</span>
          <span className="text-white font-bold italic text-2xl">BSH</span>
        </div>
        <span className="text-[#00D4AA] font-normal italic text-sm -mt-1">TECHNOLOGIES</span>
      </div>
    </div>
  );
};

export default Logo;