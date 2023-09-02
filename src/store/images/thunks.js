import { startLogout } from "../auth";
import { setError, setImagenes, setIsLoading } from "./imagesSlice";

export const getImages = (pagina = 2) => {
    return async (dispatch) => {
        try {
            dispatch(setIsLoading());

            const resp = await fetch(`${import.meta.env.VITE_API_URL}photos/?client_id=${import.meta.env.VITE_API_KEY}&page=${pagina}&per_page=12`);

            if (!resp.ok) {
                throw new Error('Falló la carga de imagenes.');
            }

            const dataImagenes = await resp.json();
            dispatch(setImagenes({ dataImagenes, pagina: pagina + 1 }));

        } catch (error) {
            dispatch(setError({ error: 'Ocurrió un error' }));
            setTimeout(() => {
                dispatch(startLogout())
            }, [2000]);
        }
    }
};