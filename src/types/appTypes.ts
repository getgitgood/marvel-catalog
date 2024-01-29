import {
  Dispatch,
  ReactNode,
  SetStateAction,
  MouseEvent,
  FormEvent
} from 'react';
import { Comic, ComicPrice, PaginationInfo } from './apiTypes';

export type PrivateRouteProps = {
  children: ReactNode;
};

export type ButtonProps = {
  buttonText?: string;
  buttonType?: 'button' | 'submit' | 'reset' | undefined;
  isDisabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  onMouseLeave?: () => void;
  onMouseOver?: () => void;
};

export type PricesProps<T> = {
  prices: ComicPrice[];
  setButtonsState: Dispatch<SetStateAction<T>>;
};

export type ButtonsStateProps = {
  isPurchaseAllowed: boolean;
  isFavoriteAdded: boolean;
  isFavoritesAllowed: boolean;
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
  children: ReactNode;
  autocomplete?: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
};

export interface ProjectSlice {
  isAuthenticated: boolean;
  catalogCards: Comic[];
  favoriteCards: Comic[];
  purchasedCards: Comic[];
}

export type NoResultsPageProps = {
  notFoundMessage?: string;
};

export type PaginationStateProps = {
  limit: number;
  offset: number;
  total: number;
};

export type UserCollectionProps = {
  collectionName: string;
};

export type ErrorPageProps = {
  message?: string;
};
