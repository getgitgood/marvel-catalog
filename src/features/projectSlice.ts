import { createSlice } from '@reduxjs/toolkit';

interface ProjectSlice {
  isAuthenticated: boolean | null;
}

const initialState = <ProjectSlice>{};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    updateUserStatus(state, { payload }) {
      state.isAuthenticated = payload;
    }
  }
});

export const { updateUserStatus } = projectSlice.actions;

export default projectSlice.reducer;
