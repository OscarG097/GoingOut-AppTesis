import { Grid, Typography } from "@mui/material"

const DrinksTab = () => {
    return (
        <Grid
            display='grid'
            gap={1}
            paddingY={5}
            alignItems='center'
            justifyContent='initial'
            rowGap={2}
            maxWidth={320}
            margin='auto'
        >
            <Grid display='flex' justifyContent='space-between'>
                <Typography variant='button' fontWeight={600}>
                    DATO BEBIDAS
                </Typography>
            </Grid>

        </Grid>
    )
}

export default DrinksTab