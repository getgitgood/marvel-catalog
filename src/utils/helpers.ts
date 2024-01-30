import md5 from 'md5';
import { Dispatch, MouseEvent, SetStateAction } from 'react';

export function getImageSrc({
  images
}: {
  images: [{ path?: string; extension?: string }];
}) {
  try {
    const [{ path, extension }] = [...images];
    return `${path}.${extension}`;
  } catch {
    return '';
  }
}

export function getHashString() {
  const PRIVATE_API_KEY = import.meta.env.VITE_PRIVATE_API_KEY;
  const PUBLIC_API_KEY = import.meta.env.VITE_PUBLIC_API_KEY;

  const timestamp = Date.now();
  const seed = timestamp + PRIVATE_API_KEY + PUBLIC_API_KEY;
  const hashString = md5(seed);

  return {
    timestamp: timestamp,
    apiKey: PUBLIC_API_KEY,
    hashString: hashString
  };
}

export function handleCardMove(
  e: MouseEvent<HTMLAnchorElement>,
  setMoveIncrement: Dispatch<SetStateAction<number>>
) {
  const { clientX, currentTarget } = e;
  const increment = 0.5;
  const { left, width } = currentTarget.getBoundingClientRect();
  const mouseX = clientX - left;
  setMoveIncrement(mouseX > width / 2 ? increment : increment * -1);
}
