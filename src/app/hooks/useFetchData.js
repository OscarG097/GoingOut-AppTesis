import { useEffect, useState } from "react";

const useGetDishes = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (url) => {
        try {
            setLoading(true);
            // const response = await getAxios().get(`${import.meta.env.VITE_API_BASE}`+ url);
            const response = `${import.meta.env.VITE_API_BASE}` + url
            setData(response.data ?? []);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);


    return { data, loading, error, fetchData };

}

export default useGetDishes