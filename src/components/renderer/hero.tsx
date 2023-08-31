/* eslint-disable @typescript-eslint/naming-convention */
import { Link } from 'components/link';
import { TypeComponent_hero } from 'lib/types';
import { isRichText, renderRichText } from 'lib/rich-text';
import { ComponentProps } from 'react';
import Image from 'next/image';
import imageLoader from '../../image_loader';

export const Hero = ({ fields }: TypeComponent_hero) => {
  const { title, text, ctaText, ctaLink, image } = fields;
  const textComp = isRichText(text) ? renderRichText(text) : text;
  const linkProps: Omit<ComponentProps<typeof Link>, 'children'> = ctaLink
    ? { page: ctaLink }
    : { href: '#' };
  return (
    <div className="bg-white mx-auto max-w-screen-xl">
      <div className="px-8 py-20 mx-auto flex flex-wrap flex-col md:flex-row items-start">
        <div className="flex flex-col w-full md:w-3/6 justify-center items-start">
          <h1 className="pt-4 text-3xl font-medium leading-tight text-gray-900">{title}</h1>
          <div className="leading-relaxed text-lg text-gray-700 py-6">{textComp}</div>
          <Link {...linkProps}>
            <a className="w-full md:w-auto bg-blue-600 text-white font-semibold rounded-full px-3 py-2 text-center">
              {ctaText}
            </a>
          </Link>
        </div>
        <div className="w-full md:w-3/6 text-center py-8 md:py-0">
          <Image
            className="w-full px-8 z-50 float-right"
            src={`https:${image.fields.file.url}`}
            width={image.fields.file.details.image.width}
            height={image.fields.file.details.image.height}
            sizes="(max-width: 768px) 360px, 960px"
            loader={imageLoader}
          />
        </div>
      </div>
    </div>
  );
};
