import { useSelector } from "react-redux/es/hooks/useSelector";
import { Routes, Route, Navigate } from "react-router-dom";
import { AppTheme } from "../theme";
import { GoLayout } from "../layouts";
import { settings } from '../config/settings';
import { Home, LoginPage, RegisterPage, ErrorPage } from "../pages";

export const AppRoutes = () => {
    const { status } = useSelector(state => state.auth);
    const isLoggedIn = (status == 'authenticated') ? true : false;
    console.log(status, isLoggedIn)
    return (
        <AppTheme>

            <Routes>
                <Route path={settings.routeGomain} element={isLoggedIn ? <GoLayout /> : <Navigate to="/" />}>
                    <Route index element={<Home />} />
                </Route>

                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
        </AppTheme>
    )
}