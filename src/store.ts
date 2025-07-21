import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { fileStorageApi } from './features/api/fileStorageApi';
import { albumsApi } from './features/albums/albumsApi';
import albumsReducer from './features/albums/albumsSlice';

export const store = configureStore({
  reducer: {
    [fileStorageApi.reducerPath]: fileStorageApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    albums: albumsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fileStorageApi.middleware, albumsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
