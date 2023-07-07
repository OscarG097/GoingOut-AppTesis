import { Box, Paper, Tab, Tabs } from "@mui/material"

const MainTab = (props) => {
    const { children, value, ariaLabel, handleChange, tabs } = props

    function getA11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }


    return (
        <Paper
            sx={{
                height: '100%',
                width: '80%%',
                display: 'flex',
                flexDirection: 'column'

            }}
        >
            <Box
                width='100%'
                height='80%'
            >
                <Tabs
                    onChange={handleChange}
                    variant="fullWidth"
                    value={value}
                    aria-label={ariaLabel}
                    textColor='inherit'
                    indicatorColor='primary'
                    TabIndicatorProps={{ style: { background: '#EBBC47', color: '#EBBC47' } }}
                >
                    {tabs.map((tab, index) => (
                        <Tab
                            aria-hidden='true'
                            label={tab}
                            key={index}
                            {...getA11yProps(index)}
                        />
                    ))}
                </Tabs>
                {children}
            </Box>
        </Paper >
    )
}

export default MainTab