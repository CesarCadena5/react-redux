import { setError, setIsLoading, setMarvelPersonaje } from "./marvelSlice";

export const getMarvelPersonaje = (personaje = '') => {
    return async (dispatch) => {
        const filtro = personaje !== '' ? `?orderBy=name&name=${personaje}&limit=12` : `?orderBy=name&limit=12`;
        dispatch(setIsLoading());
        const resp = await fetch(`${import.meta.env.VITE_API_URL_MARVEL}characters${filtro}&ts=1000&apikey=${import.meta.env.VITE_API_KEY_MARVEL}&hash=${import.meta.env.VITE_API_KEY_HASH}`);

        if (!resp.ok) {
            dispatch(setError({ error: 'Ocurrió un error al ejecutar la consulta' }));
            return;
        }

        const { data } = await resp.json();

        if (data.results.length == 0) return dispatch(setError({ error: 'No sé encontraron resultados...' }));
        dispatch(setMarvelPersonaje({ dataMarvel: data.results }));
    };
};