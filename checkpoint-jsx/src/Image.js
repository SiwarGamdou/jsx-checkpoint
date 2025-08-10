import React from 'react';

function Image({ image, name }) {
  return (
    <img
      src={image}
      alt={name}
      style={{ width: '100%' , padding: '10px', objectFit: 'cover', borderRadius: '20px'   }}
    />
  );
}

export default Image;
