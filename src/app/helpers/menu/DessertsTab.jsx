import { Grid } from "@mui/material"
import MenuInfo from "./MenuInfo";

//Hook de fetch, donde se le manda el type(postre, bebida, plato) para armar la url
const DessertsTab = () => {

    return (
        <Grid
            paddingTop={'1rem'}
        >
            {/* <Grid display='flex' justifyContent='space-between'> */}
            {/* loading, error */}
            {/* {postres.map(postres => ( */}
            <MenuInfo
                path={import.meta.env.VITE_PATH_DESSERT}
                label={import.meta.env.VITE_LABEL_DESSERT}
            />
            {/* ))} */}
            {/* </Grid> */}

        </Grid>
    )
}

export default DessertsTab