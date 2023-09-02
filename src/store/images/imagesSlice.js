import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    imagenes: [],
    error: '',
    pagina: 1
};

export const imagesSlice = createSlice({
    name: 'imagenes',
    initialState,
    reducers: {
        setIsLoading: (state) => {
            state.loading = true;
        },
        setImagenes: (state, { payload }) => {
            state.loading = false;
            state.imagenes = payload.dataImagenes;
            state.error = null;
            state.pagina = payload.pagina;
        },
        setError: (state, { payload }) => {
            state.loading = false;
            state.imagenes = [];
            state.error = payload.error;
            state.pagina = 1;
        }
    }
});


export const { setIsLoading, setImagenes, setError } = imagesSlice.actions;