import { Route, Routes } from "react-router-dom";
import { MarvelPersonajePage } from "../pages/MarvelPersonajePage";
import { MarvelDetallesPage } from "../pages/MarvelDetallesPage";

export const MarvelRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="personajes" element={<MarvelPersonajePage />} />
                <Route path="personajes/detalles" element={<MarvelDetallesPage />} />
            </Routes>
        </>
    );
};