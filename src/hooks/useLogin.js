
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { settings } from '../config/settings';
import axiosInstance from "../constants";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth/authSlice";

export const useLogin = () => {
    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const doLogin = async ({ email, password }) => {
        dispatch(onChecking())
        try {
            const { data } = await axiosInstance.post(`${settings.authUrl}`, {
                "userName": email,
                "userPassword": password
            })
            localStorage.setItem('token', data.tokenGoingOut);
            localStorage.setItem('id', data.id);
            dispatch(onLogin({ status: 'authenticated' }));
            navigate(`${settings.routeGomain}`)
        } catch (e) {
            dispatch(onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }

    return {
        doLogin,
        status,
        user,
        errorMessage
    }
}