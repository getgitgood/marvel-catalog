import { useEffect } from 'react';
import { PrivateRouteProps } from '../types';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../hooks';

export default function PrivateRoute({
  children,
  redirectPath
}: PrivateRouteProps) {
  const navigate = useNavigate();
  const { isUserSignIn } = useAppSelector((state) => state.project);

  const isRedirected = isUserSignIn !== null;

  useEffect(() => {
    if (isRedirected) {
      navigate(redirectPath);
    }
  }, [isUserSignIn, navigate, redirectPath, isRedirected]);

  if (isUserSignIn === null) {
    return <Loader />;
  }

  return !isRedirected && children;
}
