import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    comics: [],
    nombre: '',
    thumbnail: '',
};

export const marvelListasSlice = createSlice({
    name: 'marvelListas',
    initialState,
    reducers: {
        setItemsListas: (state, { payload }) => {
            state.comics = payload.comics;
            state.nombre = payload.name;
            state.thumbnail = payload.thumbnail;
        },
        setItemsListasVacias: (state) => {
            state.comics = [];
            state.nombre = '';
            state.thumbnail = '';
        }
    }
});

export const { setItemsListas, setItemsListasVacias } = marvelListasSlice.actions;