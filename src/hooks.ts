import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import { AppDispatch, RootState } from './store';
import { Comic } from './types';

export type ContextType = {
  results: Comic[];
};

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useResults = () => {
  return useOutletContext<ContextType>();
};
