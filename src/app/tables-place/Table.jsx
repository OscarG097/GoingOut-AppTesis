import { useState } from "react";
import Draggable from 'react-draggable'
import { Box, Divider, ListItem, Menu, MenuItem, Stack, Typography } from "@mui/material";
import PropTypes from 'prop-types';

const Table = (props) => {

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const {
        amount,
        available,
        // getTableName,
        move,
        name,
        openDialog,
        ref,
        tableName,
        waiter,
        x,
        y,
        width,
        height
    } = props

    const [position, setPosition] = useState({
        x: x,
        y: y
    })

    const startDrag = (e) => {
        setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleClick = (e) => {
        // setAnchorEl(e.currentTarget)
        console.log(e)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleDialog = () => {
        openDialog(true)
        // getTableName(tableName)
    }

    return (
        <Draggable
            disabled={!move}
            axis="both"
            grid={[50, 50]}
            defaultPosition={{
                y: `${position.y}px`,
                x: `${position.x}px`,
            }}
            onStart={startDrag}
        >
            <div
                style={{
                    position: 'relative'
                }}
            >
                <Box
                    ref={ref}
                    tableName={tableName}
                    display={'flex'}
                    padding={2}
                    sx={{
                        position: 'absolute',
                        top: `${position.x}px`,
                        left: `${position.y}px`,
                        width: width,
                        height: height,
                        backgroundColor: available === null ? `${'success.main'}` : (available ? `${'success.main'}` : `${'error.main'}`),
                        '&:hover': {
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                    onClick={open ? handleClose : handleClick}

                    size='small'
                >
                    <Stack spacing={2} direction={'column'}>
                        <Stack direction={'column'}>
                            <Typography>
                                {tableName}
                            </Typography>

                            <Typography>y:{y} x:{x}</Typography>
                        </Stack>

                        {!move &&
                            <Menu
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                onClick={handleClick}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        }
                                    }
                                }}
                            >

                                <ListItem> {tableName} </ListItem>
                                <Divider />
                                {name ? <ListItem>{name}</ListItem> : null}
                                {waiter ? <ListItem>{waiter}</ListItem> : null}
                                {amount ? <ListItem>{`$${amount}`}</ListItem> : null}
                                {available ? <MenuItem onClick={() => handleDialog()}> Ocupar Mesa </MenuItem> : <MenuItem> Cerrar Mesa </MenuItem>}
                                {available && <MenuItem> Ver consumos </MenuItem>}
                                <MenuItem onClick={(e) => console.log('Posición --> x ', e.target.screenX, 'y --> ', e.target.screenY)}> Coordenadas </MenuItem>
                            </Menu>
                        }
                    </Stack>
                </Box>
            </div>
        </Draggable>
    )

}

export default Table

Table.propTypes = {
    amount: PropTypes.any,
    available: PropTypes.bool.isRequired,
    name: PropTypes.string,
    openDialog: PropTypes.any,
    tableName: PropTypes.number.isRequired,
    waiter: PropTypes.string,
    getTableName: PropTypes.any,
    move: PropTypes.any,
    x: PropTypes.any,
    y: PropTypes.any,
    ref: PropTypes.any,
    box: PropTypes.any,
    width: PropTypes.any,
    height: PropTypes.any
}