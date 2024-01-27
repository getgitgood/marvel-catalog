import { createSlice } from '@reduxjs/toolkit';
import { Comic, ProjectSlice } from '../types';

const initialState = <ProjectSlice>{
  catalogCards: <Comic[]>[]
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
    }
  }
});

export const { updateUserStatus, updateCatalogCards } = projectSlice.actions;

export default projectSlice.reducer;
