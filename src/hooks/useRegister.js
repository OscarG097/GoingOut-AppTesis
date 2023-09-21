import { useNavigate } from "react-router-dom";
import instance from "../constants";
import { settings } from '../config/settings';
import authStore from "../store/authStore";

export const useRegister = () => {
    const navigate = useNavigate();
    const { setAuthUser, status, error } = authStore();

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
            setAuthUser({ status: true, error: false })
            navigate(`${settings.routeGomain}`)
        } catch (e) {
            setAuthUser({ status: false, error: true })
        }
    }

    return {
        status,
        error,
        setNewClient,
    }
}

