import { useOpen } from "../hooks/useOpen";
import { LayoutManagementStyles } from "./LayoutStyles";
import { Outlet } from 'react-router-dom';
import { Box, Divider, IconButton, List, Toolbar, useTheme } from "@mui/material";
import { CalendarMonth, ChevronLeft, ChevronRight, Home, Menu, Notifications, PeopleAlt, RestaurantMenu, Settings } from '../utils/icons'
import { CollapseOptionSidebar, LogoutOption, OptionSidebar } from "../components/ListItem";
import { AppBar, Drawer, DrawerHeader } from "../utils";
import { settings } from "../config/settings";
import GOING_OUT_LOGO from "./../images/GoingOutNavbarLogo.png";
import { useLogout } from "../hooks";
import { listMenuOptions, listReservationOptions } from "./../../data";

export const GoLayout = () => {
    const classes = LayoutManagementStyles()
    const theme = useTheme()
    const { handleOpenSidebar, handleOpenMenu, handleOpenReservation, openSidebar, openMenu, openReservation } = useOpen()
    const { doLogout } = useLogout()

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                open={openSidebar}
                style={{
                    backgroundColor: '#ffffff',
                    position: 'fixed'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleOpenSidebar}
                        edge="start"
                        sx={{
                            display: 'block',
                            marginRight: 5,
                            ...(openSidebar && { display: 'none' }),
                        }}
                    >
                        <Menu className={classes.sidebarIcon} />
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
            <Drawer variant="permanent" open={openSidebar}>
                <DrawerHeader>
                    <IconButton onClick={handleOpenSidebar}>
                        {theme.direction === 'rtl' ? <ChevronRight style={{ color: '#000000' }} /> : <ChevronLeft style={{ color: 'black' }} />}
                    </IconButton>
                </DrawerHeader>
                <Divider />

                <List>
                    <OptionSidebar
                        path={settings.routeGomain}
                        label={'Inicio'}
                        openSidebar={openSidebar}
                    >
                        <Home className={classes.sidebarIcon} />
                    </OptionSidebar>

                    <OptionSidebar
                        path={settings.routeOrders}
                        label={'Pedidos en mesa'}
                        openSidebar={openSidebar}
                    >
                        <Notifications className={classes.sidebarIcon} />
                    </OptionSidebar>

                    <CollapseOptionSidebar
                        label={'Menu'}
                        handleClickMenu={handleOpenMenu}
                        open={openMenu}
                        openSidebar={openSidebar}
                        listOption={listMenuOptions}
                    >
                        <RestaurantMenu className={classes.sidebarIcon} />
                    </CollapseOptionSidebar>

                    <OptionSidebar
                        path={settings.routeWaiters}
                        label={'Camareros'}
                        openSidebar={openSidebar}
                    >
                        <PeopleAlt className={classes.sidebarIcon} />
                    </OptionSidebar>

                    <CollapseOptionSidebar
                        label={'Reservas'}
                        openSidebar={openSidebar}
                        handleClickMenu={handleOpenReservation}
                        open={openReservation}
                        listOption={listReservationOptions}
                    >
                        <CalendarMonth className={classes.sidebarIcon} />
                    </CollapseOptionSidebar>

                </List>

                <LogoutOption
                    doLogout={doLogout}
                    openSidebar={openSidebar}
                />

                {openSidebar &&
                    <OptionSidebar
                        path={'/management'}
                        label={'Configuración'}
                        openSidebar={openSidebar}
                    >
                        <Settings className={classes.sidebarIcon} />
                    </OptionSidebar>
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