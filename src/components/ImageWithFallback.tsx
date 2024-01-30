import { useState } from 'react';
import { getImageSrc } from '../utils/helpers';
import { ImageWithFallbackProps } from '../types';
import imageTemplate from '../assets/img/no_image.png';

export default function ImageWithFallback(props: ImageWithFallbackProps) {
  const { images, title, ...restProps } = props;
  const imageSrc = getImageSrc({ images });
  const [currentImageSrc, setCurrentImageSrc] = useState(imageSrc);

  const onImageError = () => {
    setCurrentImageSrc(imageTemplate);
  };

  return (
    <img
      src={currentImageSrc}
      alt={`${title} comic image`}
      onError={onImageError}
      {...restProps}
    />
  );
}
