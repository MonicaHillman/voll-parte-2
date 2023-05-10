import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PaginaBase from "./pages/PaginaBase";

function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<PaginaBase />}>
            <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;