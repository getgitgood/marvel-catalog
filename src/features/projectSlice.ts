import { createSlice } from '@reduxjs/toolkit';
import { Comic, ProjectSlice } from '../types';

const initialState = <ProjectSlice>{
  catalogCards: <Comic[]>[],
  purchasedCards: <Comic[]>[],
  favoriteCards: <Comic[]>[]
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    updateUserStatus(state, { payload }) {
      state.isAuthenticated = payload;
    },
    updateCatalogCards(state, { payload }) {
      state.catalogCards = payload;
    },
    addToPurchasedCards(state, { payload }) {
      state.purchasedCards.push(payload);
    },
    addToFavoriteCards(state, { payload }) {
      state.favoriteCards.push(payload);
    },
    removeFromFavoriteCards(state, { payload }) {
      state.favoriteCards = state.favoriteCards.filter(
        (card) => card.id !== payload.id
      );
    }
  }
});

export const {
  updateUserStatus,
  updateCatalogCards,
  addToPurchasedCards,
  addToFavoriteCards,
  removeFromFavoriteCards
} = projectSlice.actions;

export default projectSlice.reducer;
