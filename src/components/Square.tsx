import React from 'react';
import xImage from '../assets/x.png';
import oImage from '../assets/o.png';

interface SquareProps {
  value: 'X' | 'O' | null;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  const getImage = (): string | null => {
    if (value === 'X') return xImage;
    if (value === 'O') return oImage;
    return null;
  };

  const renderImage = () => {
    const imageSource = getImage();
    if (!imageSource || !value) return null;
    
    return <img src={imageSource} alt={value} />;
  };

  return (
    <button 
      className="square d-flex align-items-center justify-content-center border-0 rounded-3 shadow-sm 
                 bg-white bg-opacity-90 user-select-none position-relative overflow-hidden"
      onClick={onClick}
    >
      {renderImage()}
    </button>
  );
};

export default Square;