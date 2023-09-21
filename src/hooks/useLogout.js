
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { settings } from '../config/settings';
import { onLogout } from "../store/auth/authSlice";
import instance from "../constants";

export const useLogout = () => {
    const { status, user, errorMessage } = useSelector(state => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const doLogout = async () => {
        try {
            await instance.post(`${settings.autLogoutUrl}`, {
                "userId": `${localStorage.getItem('id')}`
            })
            localStorage.removeItem('token')
            dispatch(onLogout({ status: 'not-authenticated' }));
            navigate(`/`)
        } catch (e) {
            console.error(e)
        }
    }

    return {
        doLogout,
        status,
        user,
        errorMessage
    }
}