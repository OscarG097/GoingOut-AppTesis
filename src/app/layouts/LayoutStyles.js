import { makeStyles } from "@mui/styles";

const LayoutManagementStyles = makeStyles({
    sidebarIcon: {
        color: '#000000',
    },
    sidebarIconButton: {
        minHeight: 48,
        justifyContent: 'center',
        px: 2.5,
        textDecoration: 'none',
    },
    sidebarListItemButton: {
        minWidth: 0,
        minHeight: 48,
        justifyContent: 'center',
        px: 2.5,
    },
    sidebarListItemText: {
        color: '#000000',
        textDecoration: 'none',
    },
})

export { LayoutManagementStyles }