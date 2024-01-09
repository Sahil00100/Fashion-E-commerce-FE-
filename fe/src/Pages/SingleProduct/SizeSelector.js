import React, { useState } from 'react';

function SizeTag({ size, isSelected, onClick }) {
  const sizeTagStyle = {
    display: 'inline-block',
    padding: '15px 20px', // Increase the size as needed
    borderRadius: '8px', // Set the border-radius for rounded corners
    backgroundColor: 'white',
    color: isSelected ? 'black' : 'grey',
    border: isSelected ? '2px solid black' : '1px solid grey',
    cursor: 'pointer',
    marginRight: '10px',
    minWidth: '80px', // Set the minimum width
    minHeight: '5px', // Set the minimum height
    marginTop:"10px"
  };

  return (
    <div style={sizeTagStyle} onClick={() => onClick(size)}>
      {size}
    </div>
  );
}

function SizeSelector(props) {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const {sizes} = props

  return (
    <div>
      {sizes.map((size, index) => (
        <SizeTag
          key={index}
          size={size.name}
          isSelected={selectedSize === size.name}
          onClick={handleSizeClick}
        />
      ))}
    </div>
  );
}

export default SizeSelector;
