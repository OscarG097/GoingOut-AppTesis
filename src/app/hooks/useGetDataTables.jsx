import { useEffect, useState } from "react";


export const useGetDataTables = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            setLoading(true)
            setData(url)
            console.log(url)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return {
        data,
        loading
    }
}