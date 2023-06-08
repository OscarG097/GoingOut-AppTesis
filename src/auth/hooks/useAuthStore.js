// Realizar cualquier interaccion con la parte de Auth en el store (redux)
import { useDispatch, useSelector } from 'react-redux';
import { authApi } from '../../api';
 


export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    //proceso de Login
    const startLogin = async({ email, password }) => {
        console.log({email,password})

        try {
            
            const resp = await authApi.post('Authentication/Login', { email, password })
            console.log({resp})

        } catch (error) {
            console.log({error})
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