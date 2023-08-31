import { ImageLoaderProps } from 'next/image';

export default function ({ src, width, quality }: ImageLoaderProps) {
  const url = new URL(src);
  url.searchParams.set('fm', 'webp');
  console.log(width);
  url.searchParams.set('w', width.toString());
  url.searchParams.set('q', (quality || 75).toString());
  return url.href;
}
