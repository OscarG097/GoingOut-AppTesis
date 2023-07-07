/* eslint-disable react/prop-types */
import { Container } from "@mui/material"

const TabInfo = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <Container
            disableGutters
            role='tabpanel'
            hidden={value !== index}
            id={`menu-tabpanel-${index}`}
            aria-labelledby={`menu-tab-${index}`}
            {...other}
        >
            {value === index && (
                children
            )}
        </Container>
    )
}

export default TabInfo