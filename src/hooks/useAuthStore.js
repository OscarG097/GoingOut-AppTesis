import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authApi from '../api/authApi';
import { settings } from '../config/settings'
import { onChecking, onLogin, onLogout, clearErrorMessage } from '../store/auth/authSlice';



export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const startLogin = async ({ email, password }) => {

        dispatch(onChecking());

        try {

            const { data } = await authApi.post('Authentication/Login', {
                "userName": email,
                "userPassword": password,
                "userLanguage": 0
            });
            console.log({ data })
            localStorage.setItem('token', data.tokenGoingOut);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ id: data.id }));
            navigate(`${settings.routeGomain}`)

        } catch (error) {
            dispatch(onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }

    const startRegister = async ({
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

        dispatch(onChecking());

        try {

            const { data } = await authApi.post('Authentication/CreateClient', {
                "businessName": businessName,
                "cuit": cuit,
                "email": email,
                "password": password,
                "province": province,
                "location": location,
                "street": street,
                "numeration": numeration,
                "pc": pc
            });

            localStorage.setItem('token', data.tokenGoingOut);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ id: data.id }));


        } catch (error) {
            dispatch(onLogout(error.response.data?.msg || '--'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }

    return {
        //Propiedades
        status,
        user,
        errorMessage,

        //Metodos(interacciones con el store)
        startLogin,
        startRegister,
    }
}