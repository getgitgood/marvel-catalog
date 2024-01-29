import { useState } from 'react';
import { getImageSrc } from '../utils/helpers';
import { ImageWithFallbackProps } from '../types';
import imageTemplate from '../assets/img/no_image.png';

export default function ImageWithFallback({
  images,
  title,
  className
}: ImageWithFallbackProps) {
  const imageSrc = getImageSrc({ images });
  const [currentImageSrc, setCurrentImageSrc] = useState(imageSrc);

  const onImageError = () => {
    setCurrentImageSrc(imageTemplate);
  };

  return (
    <img
      className={className}
      src={currentImageSrc}
      alt={`${title} comic image`}
      onError={onImageError}
    />
  );
}
