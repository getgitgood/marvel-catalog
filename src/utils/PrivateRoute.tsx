import { useEffect } from 'react';
import { PrivateRouteProps } from '../types';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../hooks';

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { isAuthenticated } = useAppSelector((state) => state.project);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated && children;
}
