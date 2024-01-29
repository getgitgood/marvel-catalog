import {
  combineReducers,
  configureStore,
  PreloadedStateShapeFromReducersMapObject
} from '@reduxjs/toolkit';

import { marvelApi } from './features/apiSlice';
import projectReducer from './features/projectSlice';

const rootReducer = combineReducers({
  project: projectReducer,
  [marvelApi.reducerPath]: marvelApi.reducer
});

export function setupStore(
  preloadedState?: PreloadedStateShapeFromReducersMapObject<RootState>
) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(marvelApi.middleware)
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
