import { Navigate, Route, Routes } from "react-router-dom";
import { MarvelRoutes } from "../marvel/routes/MarvelRoutes";
import { Navbar } from "../components/navbar/navbar";
import { ImagesPages } from "../images/pages/ImagesPages";

export const ModuleRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/*" element={<Navigate to="/marvel/personajes" />} />
                <Route path="/marvel/*" element={<MarvelRoutes />} />
                <Route path="/imagenes" element={<ImagesPages />} />
            </Routes>
        </>
    );
};