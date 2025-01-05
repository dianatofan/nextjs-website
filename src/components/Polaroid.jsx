import Image from 'next/image';
import React from 'react';

export default ({ src, caption }) => (
  <div className="w-full md:w-1/2 lg:w-1/3 h-auto">
    <Image
      src={src}
      alt={caption}
      layout="responsive"
      width={200}
      height={400}
      style={{
        objectFit: 'cover',
        margin: '20px 20px 20px 0',
        border: 'solid 20px white',
        borderTopWidth: '40px',
        borderBottomWidth: '80px',
        boxShadow: '0 4px 4px 1px rgba(34, 52, 88, 0.15)',
      }}
    />
    <figcaption className="caption">{caption}</figcaption>
  </div>
);

