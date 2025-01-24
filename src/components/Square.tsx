import React from 'react';
import xImage from '../assets/x.png';
import oImage from '../assets/o.png';
import '../styles/Square.css';

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
    <button className="square" onClick={onClick}>
      {renderImage()}
    </button>
  );
};

export default Square;