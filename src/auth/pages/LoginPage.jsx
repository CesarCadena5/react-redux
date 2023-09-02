import { useForm } from '../../hooks/useForm';
import { AuthLayout } from '../layout/AuthLayout';
import '../styles/AuthPages.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkingAuthentication, startGoogleSigIn, startSignWithEmailAndPassword } from '../../store/auth/thunks';
import { useMemo } from 'react';

export const LoginPage = () => {
    const dispatch = useDispatch();
    const { status, errorMessage } = useSelector(state => state.auth);

    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const { email, password, formState, onInputChange,
        formValid, emailValido, passwordValido, emailTocado, passwordTocado } = useForm({
            email: '', password: '', emailTocado: false, passwordTocado: false
        }, {
            email: [(value) => value.includes('@'), 'El email es inválido'],
            password: [(value) => value.length >= 6, 'El password debe tener más de 6 letras'],
        });

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(startSignWithEmailAndPassword({ email, password }));
    }

    const onGoogleSigIn = () => {
        dispatch(startGoogleSigIn(email, password));
    }

    return (
        <AuthLayout titulo='Login'>
            <form onSubmit={onSubmit} className='form'>
                <label htmlFor="email">Email</label>
                <input type="email" required value={email} onChange={onInputChange} name='email' placeholder='cesar@gmail.com' />
                {
                    emailValido && emailTocado && (
                        <small>{emailValido}</small>
                    )
                }

                <label htmlFor="password">Password</label>
                <input type="password" required value={password} onChange={onInputChange} name='password' placeholder='123456' />
                {
                    passwordValido && passwordTocado && (
                        <small>{passwordValido}</small>
                    )
                }
                {
                    !!errorMessage && (
                        <small>{errorMessage}</small>
                    )
                }
                <div>
                    <button
                        disabled={isAuthenticating || !formValid}
                        type='submit'
                        className='btn-form'>
                        Login
                    </button>
                    <button
                        disabled={isAuthenticating}
                        className='btn-form'
                        onClick={onGoogleSigIn}>
                        Google
                    </button>
                </div>
                <NavLink
                    className="enlace-crear"
                    to="/auth/registro"
                >
                    Crear cuenta
                </NavLink>
            </form>
        </AuthLayout>
    )
}