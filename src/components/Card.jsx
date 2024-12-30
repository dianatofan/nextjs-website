import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Card({
                               image,
                               title,
                               description,
                               role,
                               url,
                               inProgress,
                             }) {
  const [icon, showIcon] = useState(false);
  const router = useRouter();

  return (
    <div className="rectangle bg-white rounded-xl relative h-full">
      <Image
        src={image}
        alt="Description of the image"
        layout="responsive"
        width={400}
        height={600}
        objectFit="cover"
        className="rounded-t-xl h-full"
      />
      <div className="p-4">
        <div className="mb-1 text-xl font-semibold text-primary">{title}</div>
        <div className="block mb-1 text-md text-primary">{description}</div>
      </div>
    {/*</div>*/}
      {/*  className={`top image ${url}`}*/}
      {/*  onClick={() => !inProgress && router.push(`/${url}`)}*/}
      {/*  onMouseOver={() => showIcon(true)}*/}
      {/*  onMouseLeave={() => showIcon(false)}*/}
      {/*>*/}
      {/*  <Image*/}
      {/*    src={image}*/}
      {/*    alt={title}*/}
      {/*    layout="fill"*/}
      {/*    objectFit="cover"*/}
      {/*    style={{*/}
      {/*      cursor: "pointer",*/}
      {/*      borderRadius: "16px",*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</div>*/}
      {/*<div className="w-1/2 h-56 relative">*/}

      {/*</div>*/}
      {/*<div className="bottom">*/}
      {/*  <div className="mb-1 text-xl font-semibold text-primary">{title}</div>*/}
      {/*  <div className="block mb-1 text-md text-primary">{description}</div>*/}
      {/*</div>*/}
    </div>
  );
}