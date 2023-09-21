
import { useNavigate } from "react-router-dom";
import { settings } from '../config/settings';
import instance from "../constants";
import authStore from "../store/authStore";

export const useLogout = () => {
    const { status, error, setAuthUser } = authStore();
    const navigate = useNavigate();

    const doLogout = async () => {
        try {
            await instance.post(`${settings.autLogoutUrl}`, {
                "userId": `${localStorage.getItem('id')}`
            })
            localStorage.removeItem('token')
            setAuthUser({ status: false, error: false })
            navigate(`/`)
        } catch (e) {
            setAuthUser({ status: true, error: true })
            console.error(e)
        }
    }

    return {
        doLogout,
        status,
        error
    }
}