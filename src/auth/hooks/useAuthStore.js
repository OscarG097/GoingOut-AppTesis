// Realizar cualquier interaccion con la parte de Auth en el store (redux)
import { useDispatch, useSelector } from 'react-redux';
import { authApi } from '../../api';
import { onChecking, onLogin, onLogout, clearErrorMessage } from '../../store';
 


export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    //proceso de Login
    const startLogin = async({ email, password }) => {
        
        dispatch( onChecking() );

        try {
            
            const { data } = await authApi.post('Authentication/Login', {
                "userName": email, 
                "userPassword": password, 
                "userLanguage": 0 
            });
            
            localStorage.setItem( 'token', data.tokenGoingOut );
            localStorage.setItem( 'token-init-date', new Date().getTime() );
            dispatch( onLogin({ id: data.id }) );


        } catch (error) {
            dispatch( onLogout('Credenciales incorrectas') );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
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
    }
}