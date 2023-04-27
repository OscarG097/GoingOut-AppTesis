import { useState } from "react";
import { LayoutManagementStyles } from "./LayoutStyles";
import { Link, Outlet } from 'react-router-dom';
import {
    Box,
    Collapse,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    useTheme
}
    from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MovingIcon from '@mui/icons-material/Moving';
import SettingsIcon from '@mui/icons-material/Settings';
import { AppBar, Drawer, DrawerHeader } from "../utils/CustomMUIComponent";
import GOING_OUT_LOGO from "./../../images/GoingOutNavbarLogo.png";
import { listMenuOptions, listReservationOptions, listBillingsOptions } from "../../../data";

function GoLayout() {
    const classes = LayoutManagementStyles()
    const theme = useTheme()
    const [open, setOpen] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)
    const [openReservation, setOpenReservation] = useState(false)
    const [openBillings, setOpenBillings] = useState(false)


    const handleDrawer = () => {
        setOpen(!open)
    }

    const handleClickMenu = () => {
        setOpenMenu(!openMenu)
    }

    const handleClickReservation = () => {
        setOpenReservation(!openReservation)
    }

    const handleClickBillings = () => {
        setOpenBillings(!openBillings)
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                open={open}
                style={{
                    backgroundColor: '#ffffff',
                    position: 'fixed'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawer}
                        edge="start"
                        sx={{
                            display: 'block',
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon className={classes.sidebarIcon} />
                    </IconButton>
                    <Box
                        component={'img'}
                        alt="GoingOut"
                        src={GOING_OUT_LOGO}
                        sx={{
                            margin: 'auto',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '200px',
                            height: '62px'
                        }}
                    />
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawer}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon style={{ color: '#000000' }} /> : <ChevronLeftIcon style={{ color: 'black' }} />}
                    </IconButton>
                </DrawerHeader>
                <Divider />

                <List>
                    <ListItem disablePadding sx={{ display: 'block' }} component={Link} to={'/management'}>
                        <ListItemButton
                            className={classes.sidebarListItemButton}
                            sx={{
                                justifyContent: open ? 'initial' : 'center',
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >

                                <HomeIcon className={classes.sidebarIcon} />
                            </ListItemIcon>
                            <ListItemText className={classes.sidebarListItemText} primary='Inicio' sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: 'block' }} component={Link} to={'pedidos'}>
                        <ListItemButton
                            className={classes.sidebarListItemButton}
                            sx={{
                                justifyContent: open ? 'initial' : 'center',

                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <NotificationsIcon className={classes.sidebarIcon} />
                            </ListItemIcon>
                            <ListItemText className={classes.sidebarListItemText} primary='Notificaciones' sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItemButton onClick={open ? handleClickMenu : null}>
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <RestaurantMenuIcon className={classes.sidebarIcon} />
                        </ListItemIcon>
                        <ListItemText primary='Menú' className={classes.sidebarListItemText} sx={{ opacity: open ? 1 : 0 }} ></ListItemText>
                        {(open && openMenu) ? <ExpandLessIcon /> : <ExpandMoreIcon sx={{ opacity: open ? 1 : 0 }} />}
                    </ListItemButton>

                    <Collapse in={open ? openMenu : false} timeout='auto'>
                        <List component='div' disablePadding >
                            {listMenuOptions.map(({ id, label, path }) => (
                                <ListItemButton sx={{ pl: 4 }} key={id} component={Link} to={path} >
                                    <ListItemText secondary={label} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Collapse>

                    <ListItem disablePadding sx={{ display: 'block' }} component={Link} to={'camareros'}>
                        <ListItemButton
                            className={classes.sidebarListItemButton}
                            sx={{
                                justifyContent: open ? 'initial' : 'center',
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <PeopleAltIcon className={classes.sidebarIcon} />
                            </ListItemIcon>
                            <ListItemText className={classes.sidebarListItemText} primary='Camareros' sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItemButton onClick={open ? handleClickReservation : null}>
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: open ? 'initial' : 'center'
                            }}>
                            <CalendarMonthIcon className={classes.sidebarIcon} />
                        </ListItemIcon>
                        <ListItemText primary='Reservas' className={classes.sidebarListItemText} sx={{ opacity: open ? 1 : 0 }} />
                        {(open && openReservation) ? <ExpandLessIcon /> : <ExpandMoreIcon sx={{ opacity: open ? 1 : 0 }} />}
                    </ListItemButton>

                    <Collapse in={open ? openReservation : false} timeout='auto'>
                        <List component='div' disablePadding >
                            {listReservationOptions.map(({ id, label, path }) => (
                                <ListItemButton sx={{ pl: 4 }} key={id} component={Link} to={path} >
                                    <ListItemText secondary={label} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Collapse>

                    <ListItemButton onClick={open ? handleClickBillings : null}>
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: open ? 'initial' : 'center'
                            }}
                        >
                            <MovingIcon className={classes.sidebarIcon} />
                        </ListItemIcon>
                        <ListItemText primary='Información contable' className={classes.sidebarListItemText} sx={{ opacity: open ? 1 : 0 }} />
                        {(open && openBillings) ? <ExpandLessIcon /> : <ExpandMoreIcon sx={{ opacity: open ? 1 : 0 }} />}
                    </ListItemButton>
                </List>

                <Collapse in={open ? openBillings : false} timeout='auto'>
                    <List component='div' disablePadding >
                        {listBillingsOptions.map(({ id, label, path }) => (
                            <ListItemButton sx={{ pl: 4 }} key={id} component={Link} to={path} >
                                <ListItemText secondary={label} />
                            </ListItemButton>
                        ))}
                    </List>
                </Collapse>

                {open &&
                    <ListItem disablePadding sx={{ display: 'block' }} component={Link} to={'/'}>
                        <ListItemButton
                            className={classes.sidebarListItemButton}
                            sx={{
                                justifyContent: open ? 'initial' : 'center',

                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <SettingsIcon className={classes.sidebarIcon} />
                            </ListItemIcon>
                            <ListItemText className={classes.sidebarListItemText} primary='Configuración' sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                }

                <Divider />
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Outlet />
            </Box>
        </Box>
    )

}

export default GoLayout