import axios from "axios";
import { settings } from "./config/settings";

const axiosInstance = axios.create({
    baseURL: settings.apiBaseUrl,
    timeout: 3000,
    headers: {
        'SecretKey': 'df7baef36b029e0450133eea8aefb3deb2fd759ebfa1f810c12734e0b158841b',
        'dbKey': 'GoingOutClientBD',
        'Authorization': `Bearer ${localStorage?.getItem('token')}`
    }

});

export default axiosInstance