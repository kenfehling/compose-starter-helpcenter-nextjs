/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import NextImage from 'next/image';
import { TypeComponent_image } from 'lib/types';

const styles = {
  image: {
    margin: 0,
  },
};

export function Image({ fields }: Omit<TypeComponent_image, 'metadata'>) {
  const { title, image } = fields;

  return (
    <div className="flex flex-col w-full lg:mb-12 mt-8">
      <NextImage
        className="w-full"
        style={styles.image}
        src={`${image.fields.file.url}?w=960`}
        width={image.fields.file.details.image.width}
        height={image.fields.file.details.image.height}
      />
      <span className="py-4 text-gray-700 text-center">{title}</span>
    </div>
  );
}
