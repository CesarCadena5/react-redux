import { Navigate, Route, Routes } from "react-router-dom";
import { MarvelPersonajePage } from "../pages/MarvelPersonajePage";

export const MarvelRoutes = () => {
    console.log('entra marvel')
    return (
        <>
            <Routes>
                <Route path="/*" element={<MarvelPersonajePage />} />
            </Routes>
        </>
    );
};