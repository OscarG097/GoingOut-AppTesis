import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import instance from "../constants";
import { settings } from '../config/settings';
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth/authSlice";

export const useRegister = () => {
    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const setNewClient = async ({
        businessName,
        cuit,
        email,
        password,
        province,
        location,
        street,
        numeration,
        pc
    }) => {
        dispatch(onChecking())

        try {
            const { data } = await instance.post(`${settings.createCLientUrl}`, {
                "businessName": businessName,
                "cuit": cuit,
                "email": email,
                "pass": password,
                "province": province,
                "location": location,
                "street": street,
                "numeration": numeration,
                "pc": pc
            });
            localStorage.setItem('token', data.tokenGoingOut);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ id: data.id }));
            navigate(`${settings.routeGomain}`)
        } catch (e) {
            dispatch(onLogout(e.response.data?.msg || '--'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }

    }
    return {
        status,
        user,
        errorMessage,
        setNewClient,
    }
}

