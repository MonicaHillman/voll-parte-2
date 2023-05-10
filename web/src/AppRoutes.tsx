import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PaginaBase from "./pages/PaginaBase";
import PaginaInicial from "./pages/PaginaInicial";

function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<PaginaBase />}>
            <Route index element={<PaginaInicial />} />
            <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;