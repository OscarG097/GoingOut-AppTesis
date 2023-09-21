import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { LayoutManagementStyles } from "../layouts/LayoutStyles";
import { ExpandLess, ExpandMore, Logout } from "../utils/icons";
import { Link } from "react-router-dom";


export const OptionSidebar = ({ children, path, label, openSidebar }) => {
    const classes = LayoutManagementStyles()
    return (
        <ListItem disablePadding sx={{ display: 'block' }} component={Link} to={path}>
            <ListItemButton
                className={classes.sidebarListItemButton}
                sx={{
                    justifyContent: openSidebar ? 'initial' : 'center',
                }}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: openSidebar ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                >

                    {children}
                </ListItemIcon>
                <ListItemText className={classes.sidebarListItemText} primary={label} sx={{ opacity: openSidebar ? 1 : 0 }} />
            </ListItemButton>
        </ListItem>
    )
}

export const CollapseOptionSidebar = ({ handleClickMenu, open, children, label, listOption, openSidebar }) => {
    const classes = LayoutManagementStyles()
    return (
        <>
            <ListItemButton onClick={openSidebar ? handleClickMenu : null}>
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: openSidebar ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                >
                    {children}
                </ListItemIcon>
                <ListItemText primary={label} className={classes.sidebarListItemText} sx={{ opacity: openSidebar ? 1 : 0 }} ></ListItemText>
                {open ? <ExpandLess /> : <ExpandMore sx={{ opacity: openSidebar ? 1 : 0 }} />}
            </ListItemButton>

            <Collapse in={open} timeout='auto'>
                <List component='div' disablePadding >
                    {listOption.map(({ id, label, path }) => (
                        <ListItemButton sx={{ pl: 4 }} key={id} component={Link} to={path} >
                            <ListItemText secondary={label} />
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>
        </>
    )
}

export const LogoutOption = ({ doLogout, openSidebar }) => {
    const classes = LayoutManagementStyles()
    return (
        <ListItem disablePadding sx={{ display: 'block' }} onClick={doLogout}>
            <ListItemButton
                className={classes.sidebarListItemButton}
                sx={{
                    justifyContent: open ? 'initial' : 'center',
                }}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: openSidebar ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                >
                    <Logout className={classes.sidebarIcon} />
                </ListItemIcon>
                <ListItemText className={classes.sidebarListItemText} primary='Cerrar sesión' sx={{ opacity: openSidebar ? 1 : 0 }} />
            </ListItemButton>
        </ListItem>
    )
}