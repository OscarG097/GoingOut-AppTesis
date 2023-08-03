import { Routes, Route } from "react-router-dom";
import { AppTheme } from "../theme";
import { GoLayout } from "../layouts";
import { settings } from '../config/settings';
import { Home, LoginPage, RegisterPage, ErrorPage } from "../pages";

export const AppRoutes = () => {
    return (
        <AppTheme>

            <Routes>
                <Route path={settings.routeGomain} element={<GoLayout />}>
                    <Route index element={<Home />} />
                </Route>

                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
        </AppTheme>
    )
}