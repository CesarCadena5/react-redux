import { Routes, Route } from 'react-router-dom';
import { ImagesPages } from '../pages/ImagesPages';

export const ImagesRoutes = () => {
    console.log('entra imagenes')
    return (
        <>
            <Routes>
                <Route path="/" element={<ImagesPages />} />
            </Routes>
        </>
    );
}