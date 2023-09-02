import { Navigate, Route, Routes } from "react-router-dom";
import { MarvelRoutes } from "../marvel/routes/MarvelRoutes";
import { ImagesRoutes } from '../images/routes/ImagesRoutes';
import { Navbar } from "../components/navbar/navbar";

export const ModuleRouter = () => {
    console.log('entra')
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="marvel" element={<MarvelRoutes />} />
                <Route path="imagenes" element={<ImagesRoutes />} />
                {/* <Route path="*" element={<Navigate to='/marvel/personajes' />} /> */}
            </Routes>
        </>
    );
};