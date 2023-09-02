import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(firebaseAuth, googleProvider);
        const { displayName, email, photoURL, uid } = await result.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
};

export const registerUserWithEmailAndPassword = async (email, password, nombre) => {
    try {
        const resp = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const { uid } = await resp.user;
        await updateProfile(firebaseAuth.currentUser, { displayName: nombre });

        return {
            ok: true,
            uid, email, nombre
        }

    } catch (error) {
        const errorMessage = error.message;
        const errorCode = error.code;
        return {
            ok: false,
            errorMessage,
            errorCode
        }
    }
}

export const signWithEmailAndPassword = async (email, password) => {
    try {
        const resp = await signInWithEmailAndPassword(firebaseAuth, email, password);
        const { uid, displayName } = await resp.user;

        return {
            ok: true,
            uid, displayName, email
        };
    } catch (error) {
        const errorMessage = error.message;
        const errorCode = error.code;
        return {
            ok: false,
            errorMessage,
            errorCode
        }
    }
};

export const signOutFirebase = async () => {
    return await firebaseAuth.signOut();
};