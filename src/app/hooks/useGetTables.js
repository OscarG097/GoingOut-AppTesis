import { useEffect, useState } from "react";

export const useGetTables = (url) => {

    const [tables, setTables] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            setLoading(true)
            let availableTable = 0
            let occupiedTable = 0
            for (let i = 0; i < url.length; i++) {
                if (url[i].active === false) {
                    availableTable += 1
                    console.log(url[i].amount_People)
                } else {
                    if (url[i].active === true) {
                        occupiedTable += 1
                    }
                }
            }

            setTables([
                { id: 0, name: 'Disponible', value: availableTable, color: import.meta.env.TABLES_COLOR_AVAILABLE },
                { id: 1, name: 'Ocupado', value: occupiedTable, color: import.meta.env.TABLES_COLOR_OCCUPIED }
            ])
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return {
        tables,
        loading
    }
}