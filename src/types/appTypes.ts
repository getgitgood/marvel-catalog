import { Dispatch, ReactNode, SetStateAction, MouseEvent } from 'react';
import { Comic, ComicPrice, PaginationInfo } from './apiTypes';

export type PrivateRouteProps = {
  children: ReactNode;
  redirectPath: string;
};

export type ButtonProps = {
  buttonText?: string;
  buttonType?: 'button' | 'submit' | 'reset' | undefined;
  isDisabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

export type PricesProps<T> = {
  prices: ComicPrice[];
  setButtonsState: Dispatch<SetStateAction<T>>;
};

export type ButtonsStateProps = {
  isPurchaseDisabled: boolean;
  isFavoriteAdded: boolean;
  isPurchased: boolean;
};

export type InputProps = {
  inputId: string;
  setComicsTitle?: (value: string) => void;
  placeholder?: string;
  inputType?: string;
  labelText?: string;
};

export type PaginationProps<T> = {
  pagination: PaginationInfo;
  setPaginationState: Dispatch<SetStateAction<T>>;
};

export type LabelProps = {
  htmlFor: string;
  labelText?: string;
};

export type FormProps = {
  setTitle?: (value: string) => void;
};

export type FormComponentProps = ButtonProps &
  InputProps &
  LabelProps &
  FormProps;

export interface ProjectSlice {
  isAuthenticated: boolean | null;
  catalogCards: Comic[];
  favoriteCards: Comic[];
  purchasedCards: Comic[];
}

export type PaginationStateProps = {
  limit: number;
  offset: number;
  total: number;
};

export type UserCollectionProps = {
  collectionName: string;
};
