import { Dispatch, MouseEvent, SetStateAction } from 'react';
import { Comic, ComicPrice, PaginationInfo } from './apiTypes';
import { LinkProps } from 'react-router-dom';

export type PricesProps<T> = {
  prices: ComicPrice[];
  setButtonsState: Dispatch<SetStateAction<T>>;
};

export type DetailsProps<T> = {
  currentCard: Comic;
  buttonsState: ButtonsStateProps;
  isAuthenticated: boolean;
  navigateBack: (e: MouseEvent<HTMLDivElement | HTMLAnchorElement>) => void;
  setButtonsState: Dispatch<SetStateAction<T>>;
};

export type ButtonsStateProps = {
  isPurchaseAllowed: boolean;
  isFavoriteAdded: boolean;
  isFavoritesAllowed: boolean;
  isPurchased: boolean;
};

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
}

export type PaginationProps<T> = {
  pagination: PaginationInfo;
  setPaginationState: Dispatch<SetStateAction<T>>;
};

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  method?: string | undefined;
}

export interface ProjectSlice {
  isAuthenticated: boolean;
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

export type InfoPageProps = {
  isError?: boolean;
  message?: string;
};

export interface CardProps extends LinkProps {
  cardData: Comic;
  $cardMoveDirection: number;
}

export interface ImageWithFallbackProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  title?: string;
  images: [
    {
      path?: string;
      extension?: string;
    }
  ];
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText?: string;
}

export type CardsSkeletonProps = {
  limit?: number;
};
