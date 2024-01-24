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
  const { isAuthenticated } = useAppSelector((state) => state.project);

  const isRedirected = isAuthenticated !== null;

  useEffect(() => {
    if (isRedirected) {
      navigate(redirectPath);
    }
  }, [isAuthenticated, navigate, redirectPath, isRedirected]);

  if (isAuthenticated === null) {
    return <Loader />;
  }

  return !isRedirected && children;
}
