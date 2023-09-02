import { setIsLoading } from "./marvelSlice";

export const getImageMarvel = (personaje) => {
    return async (dispatch) => {
        dispatch(setIsLoading());
        const image = await fetch(`${import.meta.env.VITE_API_URL_MARVEL}characters?name=${personaje}&apikey=${import.meta.env.VITE_API_KEY_MARVEL}`);
        console.log(image);
    };
};