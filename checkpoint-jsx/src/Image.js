import React from 'react';

function Image({ image, name }) {
  return (
    <img
      src={image}
      alt={name}
      style={{ width: '150px', display: 'block', margin: '10px auto' }}
    />
  );
}

export default Image;
