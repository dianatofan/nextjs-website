'use client';

import { CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';

type UploadResult = {
  info?: {
    public_id?: string;
    secure_url?: string;
    width?: number;
    height?: number;
  };
};

export function ImageUploader() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [publicId, setPublicId] = useState<string | null>(null);

  return (
    <CldUploadWidget
      uploadPreset={undefined} // not needed for signed uploads
      signatureEndpoint="/api/cloudinary-signature"
      options={{
        folder: 'uploads',
        sources: ['local', 'camera', 'url'],
        multiple: false,
      }}
      onSuccess={(result) => {
        const r = result as UploadResult;
        setImageUrl(r.info?.secure_url ?? null);
        setPublicId(r.info?.public_id ?? null);
      }}
    >
      {({ open }) => (
        <button
          type="button"
          onClick={() => open()}
          className="px-4 py-2 border rounded"
        >
          Upload image
        </button>
      )}
    </CldUploadWidget>
  );
}
