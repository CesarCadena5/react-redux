import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { LoadingChecking } from '../components/loading/LoadingChecking';
import { useCheckAuth } from '../hooks/useCheckAuth';
import { ModuleRouter } from './ModuleRouter';

export function AppRouter() {

    const { status } = useCheckAuth();

    if (status === 'checking') return <LoadingChecking />

    return (
        <Routes>
            {
                (status === 'authenticated')
                    ? (<Route path='/*' element={<ModuleRouter />} />)
                    : (<Route path='auth/*' element={<AuthRoutes />} />)
            }

            <Route path='/*' element={<Navigate to='/auth/login' />} />
        </Routes>
    );
}