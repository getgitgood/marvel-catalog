import md5 from 'md5';

export default function getHashString() {
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