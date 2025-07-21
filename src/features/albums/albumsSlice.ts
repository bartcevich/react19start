import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Album {
  id: string;
  title: string;
  description: string;
}

interface AlbumsState {
  albums: Album[];
  currentAlbum: Album | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AlbumsState = {
  albums: [],
  currentAlbum: null,
  status: 'idle',
  error: null
};

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    // Добавление нового альбома
    albumAdded: (state, action: PayloadAction<Album>) => {
      state.albums.push(action.payload);
    },
    // Обновление альбома
    albumUpdated: (state, action: PayloadAction<Album>) => {
      const index = state.albums.findIndex(album => album.id === action.payload.id);
      if (index !== -1) {
        state.albums[index] = action.payload;
      }
    },
    // Удаление альбома
    albumDeleted: (state, action: PayloadAction<string>) => {
      state.albums = state.albums.filter(album => album.id !== action.payload);
    },
    // Установка текущего альбома для редактирования
    setCurrentAlbum: (state, action: PayloadAction<Album | null>) => {
      state.currentAlbum = action.payload;
    },
    // Сброс состояния
    resetAlbumsState: () => initialState
  },
  // Для обработки экшенов из RTK Query (если нужно)
//   extraReducers: (builder) => {
//     builder
//       .addMatcher(
//         (action) => action.type.endsWith('/pending'),
//         (state) => {
//           state.status = 'loading';
//         }
//       )
//       .addMatcher(
//         (action) => action.type.endsWith('/fulfilled'),
//         (state) => {
//           state.status = 'succeeded';
//         }
//       )
//       .addMatcher(
//         (action) => action.type.endsWith('/rejected'),
//         (state, action) => {
//           state.status = 'failed';
//           state.error = action.error.message || 'Something went wrong';
//         }
//       );
//   }
});

// Экспорт действий
export const { 
  albumAdded, 
  albumUpdated, 
  albumDeleted, 
  setCurrentAlbum,
  resetAlbumsState 
} = albumsSlice.actions;

// Селекторы
export const selectAllAlbums = (state: { albums: AlbumsState }) => state.albums.albums;
export const selectCurrentAlbum = (state: { albums: AlbumsState }) => state.albums.currentAlbum;
export const selectAlbumsStatus = (state: { albums: AlbumsState }) => state.albums.status;
export const selectAlbumsError = (state: { albums: AlbumsState }) => state.albums.error;

// Экспорт редюсера
export default albumsSlice.reducer;