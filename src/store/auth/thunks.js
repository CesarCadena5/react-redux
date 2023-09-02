import { registerUserWithEmailAndPassword, signOutFirebase, signWithEmailAndPassword, singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./";

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    };
};

export const startGoogleSigIn = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await singInWithGoogle();

        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result));
    };
};


export const creatingUserWithEmailAndPassword = ({ email, password, nombre }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const { ok, uid, errorMessage } = await registerUserWithEmailAndPassword(email, password, nombre);
        if (!ok) return dispatch(logout({ errorMessage }));

        dispatch(login({ uid, displayName: nombre, email }));
    }
}


export const startSignWithEmailAndPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const { ok, uid, displayName, errorMessage } = await signWithEmailAndPassword(email, password);

        if (!ok) return dispatch(logout({ errorMessage }));

        dispatch(login({ uid, displayName }));
    }
};

export const startLogout = () => {
    return async (dispatch) => {
        await signOutFirebase();

        dispatch(logout());
    }
};