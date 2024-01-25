import imageTemplate from '../assets/img/no_image.png';

export default function getImageSrc(
  images: {
    path?: string;
    extension?: string;
  }[]
) {
  try {
    const [{ path, extension }] = [...images];
    return `${path}.${extension}`;
  } catch {
    return imageTemplate;
  }
}
