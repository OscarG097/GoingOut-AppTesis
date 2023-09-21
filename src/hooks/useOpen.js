import { useState } from "react"

export const useOpen = () => {
    const [openSidebar, setOpenSidiebar] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)
    const [openReservation, setOpenReservation] = useState(false)

    const handleOpenSidebar = () => {
        if (openMenu) {
            setOpenMenu(false)
        }

        if (openReservation) {
            setOpenReservation(false)
        }

        setOpenSidiebar(!openSidebar)
    }

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    const handleOpenReservation = () => {
        setOpenReservation(!openReservation)
    }

    return {
        handleOpenSidebar,
        handleOpenMenu,
        handleOpenReservation,
        openReservation,
        openMenu,
        openSidebar
    }
}