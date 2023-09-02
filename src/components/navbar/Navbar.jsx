import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { startLogout } from '../../store/auth';
import './Navbar.css';

export const Navbar = () => {

    const dispatch = useDispatch();
    const { displayName } = useSelector(state => state.auth);

    const onLogout = () => {
        dispatch(startLogout());
    }

    return (
        <nav className='navbar'>
            <ul>
                <li >
                    <NavLink to="/">
                        ImagenesApp
                    </NavLink>
                </li>

                <li>
                    {displayName}
                    <button onClick={onLogout}>
                        Salir
                    </button>
                </li>
            </ul>
        </nav>
    );
};