
import { useNavigate } from "react-router-dom";
import { settings } from '../config/settings';
import axiosInstance from "../constants";
import authStore from "../store/authStore";

export const useLogin = () => {
    const { setAuthUser } = authStore();
    const navigate = useNavigate();

    const doLogin = async ({ email, password }) => {
        try {
            const { data } = await axiosInstance.post(`${settings.authUrl}`, {
                "userName": email,
                "userPassword": password
            })
            console.log(data)
            localStorage.setItem('token', data.tokenGoingOut);
            localStorage.setItem('id', data.id);
            setAuthUser({ status: true, error: false, rol: data.rol })
            // console.log(authStore.getState().status)
            // console.log(authStore.getState().error)
            navigate(`${settings.routeGomain}`)
        } catch (e) {
            setAuthUser({ status: false, error: true })
        }
    }

    return {
        doLogin,
        // status,
        // error
    }
}