import { Navigate, Route, Routes } from "react-router-dom";
import { MarvelRoutes } from "../marvel/routes/MarvelRoutes";
import { ImagesRoutes } from '../images/routes/ImagesRoutes';
import { Navbar } from "../components/navbar/navbar";
import { ImagesPages } from "../images/pages/ImagesPages";

export const ModuleRouter = () => {
    console.log('entra en module')
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/marvel/*" element={<MarvelRoutes />} />
                <Route path="imagenes" element={<ImagesPages />} />
                <Route path="/*" element={<Navigate to="/marvel/personajes" />} />
            </Routes>
        </>
    );
};