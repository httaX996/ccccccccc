import type * as React from 'react';

export const AniMovieLogo = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img
    src="/logo.png"
    alt="CK CineMAX Logo"
    {...props}
    className='h-12 w-auto'
  />
);
