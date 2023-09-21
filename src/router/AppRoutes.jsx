import { Routes, Route, Navigate } from "react-router-dom";
import { AppTheme } from "../theme";
import { GoLayout } from "../layouts";
import { settings } from '../config/settings';
import { Home, LoginPage, RegisterPage, ErrorPage } from "../pages";
import authStore from "../store/authStore";

export const AppRoutes = () => {
    const { status } = authStore();

    return (
        <AppTheme>

            <Routes>
                <Route path={settings.routeGomain} element={status ? <GoLayout /> : <Navigate to="/" />}>
                    <Route index element={<Home />} />
                </Route>

                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
        </AppTheme>
    )
}