import React from 'react';

function Image({ image, name }) {
  return (
    <img
      src={image}
      alt={name}
      style={{ width: '50%', display: 'block', margin: '10px auto', objectFit: 'cover', borderRadius: '20px'   }}
    />
  );
}

export default Image;
