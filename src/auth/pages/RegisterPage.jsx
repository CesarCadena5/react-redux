import { useMemo, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { AuthLayout } from '../layout/AuthLayout';
import '../styles/AuthPages.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { creatingUserWithEmailAndPassword } from '../../store/auth';

export const RegisterPage = () => {
    const [formSubmit, setFormSubmit] = useState(false);
    const dispatch = useDispatch();
    const { status, errorMessage } = useSelector(state => state.auth);

    const checkingAuth = useMemo(() => status === 'checking', [status]);

    const {
        onInputChange, nombre, email, password,
        nombreTocado, emailTocado, passwordTocado,
        formState, formValid, nombreValido, emailValido, passwordValido
    } = useForm({
        nombre: '', nombreTocado: false, email: '', emailTocado: false, password: '', passwordTocado: false
    }, {
        nombre: [(value) => value.length > 3, 'El nombre es obligatorio'],
        email: [(value) => value.includes('@'), 'El email es inválido'],
        password: [(value) => value.length >= 6, 'El password debe tener más de 6 letras'],
    });

    const onSubmit = (event) => {
        event.preventDefault();

        setFormSubmit(true);
        if (!formValid) return true;
        dispatch(creatingUserWithEmailAndPassword(formState));
    };

    return (
        <AuthLayout titulo='Crear Cuenta'>
            <form className='form' onSubmit={onSubmit}>
                <label htmlFor="nombre" className='lbl-form'>Nombre</label>
                <input type="text" value={nombre} onChange={onInputChange} name='nombre' placeholder='cesar cadena...' />
                {
                    nombreValido && nombreTocado && (
                        <small>{nombreValido}</small>
                    )
                }

                <label htmlFor="email" className='lbl-form'>Email</label>
                <input type="email" value={email} onChange={onInputChange} name='email' placeholder='cesar@gmail.com' />
                {
                    emailValido && emailTocado && (
                        <small>{emailValido}</small>
                    )
                }

                <label htmlFor="password" className='lbl-form'>Password</label>
                <input type="password" value={password} onChange={onInputChange} name='password' placeholder='123456' />
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
                        disabled={checkingAuth}
                        className='btn-form'>
                        Crear
                    </button>
                </div>
                <NavLink
                    className="enlace-crear"
                    to="/auth/login"
                >
                    ¿Tienes cuenta? ingresar
                </NavLink>
            </form>
        </AuthLayout>
    )
}