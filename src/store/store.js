import { configureStore } from '@reduxjs/toolkit';
import { imagesSlice } from './images';
import { authSlice } from './auth';
import { marvelSlice } from './marvel/marvelSlice';
import { marvelListasSlice } from './marvel/marvelListasSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        imagenes: imagesSlice.reducer,
        marvel: marvelSlice.reducer,
        marvelListas: marvelListasSlice.reducer
    },
});