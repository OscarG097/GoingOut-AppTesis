import { useState } from 'react';
// import { Helmet } from "react-helmet";
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { Badge, Box, CircularProgress, Grid } from "@mui/material";
import { PieChart, Pie } from "recharts";
import { HomeStyles, HomeCard } from '../app/utils';
// import HomeCard from '../app/utils/HomeCard';
import { dataTables } from '../../data';
import { useGetDataTables } from '../hooks/useGetDataTables';

function Home() {
    const [count, setCount] = useState(0)
    const classes = HomeStyles()
    const { tables, loading } = useGetDataTables(dataTables)


    const options = [
        {
            id: 0,
            label: 'Ocupación de mesas',
            path: import.meta.env.VITE_ROUTES_TABLES,
            body:
                (loading ?
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                    :
                    <Box sx={{ marginLeft: '130px', marginBottom: '16em' }}>
                        <PieChart width={800} height={400}>
                            <Pie
                                data={tables}
                                cx={120}
                                cy={120}
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={8}
                                dataKey={'value'}
                            />
                        </PieChart>
                    </Box>)
        },
        {
            id: 1,
            label: 'Pedidos en mesa',
            path: import.meta.env.VITE_ROUTES_ORDERS,
            body:
                <Badge>
                    {count === 0 ? <NotificationsIcon sx={{ fontSize: '15em' }} /> : <NotificationsActiveIcon sx={{ fontSize: '15em' }} />}
                </Badge>

        },
        {
            id: 2,
            label: 'Reservas',
            path: import.meta.env.VITE_ROUTES_BOOKINGS,
            body: <h1>Calendario</h1>

        },
        {
            id: 3,
            label: 'Facturaciones',
            path: import.meta.env.VITE_ROUTES_BILLINGS,
            body: <ReceiptLongIcon sx={{ fontSize: '15em' }} />
        },
    ]

    return (
        <>
            {/* <Helmet>
                <title>GO Management | Home</title>
            </Helmet> */}
            <Grid
                container
                className={classes.homeGrid}
                spacing={2}
                direction={'row'}
                justifyContent={'center'}
                alignItems={'center'}
            >

                {options.map(({ id, label, path, body }) => (
                    <HomeCard
                        key={id}
                        label={label}
                        path={path}
                        body={body}
                    />
                ))}
                {/* <button onClick={() => setCount(count + 1)}>
                    Click!
                </button> */}
            </Grid>
        </>
    )
}
export { Home }