import axios from 'axios';
import { getEnvVariables } from '../auth/helpers';

const { VITE_API_BASE } = getEnvVariables();

const authApi = axios.create({
    baseURL: VITE_API_BASE
});

// Configuracion de interceptores de axios
// añadir o modificar info. antes de la peticion
authApi.interceptors.request.use( config => {

    config.headers = {
        'SecretKey': 'df7baef36b029e0450133eea8aefb3deb2fd759ebfa1f810c12734e0b158841b',
        'dbKey': 'GoingOutClientBD'
    }

    return config;
} );



export default authApi;