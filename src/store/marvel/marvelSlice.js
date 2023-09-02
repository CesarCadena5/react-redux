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
        setImageMarvel: (state, { payload }) => {
            state.loading = false;
            state.dataMarvel = payload.dataImages;
            state.error = null;
        },
        setError: (state, { payload }) => {
            state.loading = false;
            state.dataMarvel = [];
            state.error = payload.error;
        }
    }
});


export const { setIsLoading, setImageMarvel, setError } = marvelSlice.actions;