import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    dataMarvel: [],
    error: '',
};

export const marvelSlice = createSlice({
    name: 'dataMarvel',
    initialState,
    reducers: {
        setIsLoading: (state) => {
            state.loading = true;
        },
        setMarvelPersonaje: (state, { payload }) => {
            state.loading = false;
            state.dataMarvel = payload.dataMarvel;
            state.error = null;
        },
        setError: (state, { payload }) => {
            state.loading = false;
            state.dataMarvel = [];
            state.error = payload.error;
        }
    }
});


export const { setIsLoading, setMarvelPersonaje, setError } = marvelSlice.actions;