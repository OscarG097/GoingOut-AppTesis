import { createRef, useRef, useState } from "react";
import { Button, Stack } from "@mui/material";
import { TablesPlaceStyles } from "./TablesPlaceStyles";
import { dataTableInfo } from "../../../data";
import { useGetDataTables } from "../../hooks/useGetDataTables";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CustomCircularProgress from "../utils/CustomCircularProgress";
import EditIcon from '@mui/icons-material/Edit';
import Table from "./Table";
import CustomDialog from "./Dialog";

function TablesPlace() {
    const [newName, setNewName] = useState('')
    const [move, setMove] = useState(false)
    const [tableName, setTableName] = useState('')
    const [openDialog, setOpenDialog] = useState(false)
    const classes = TablesPlaceStyles()
    const { loading, data } = useGetDataTables(dataTableInfo)
    const boxRef = useRef(data.map(() => createRef()))


    const handleCloseDialog = () => {
        setOpenDialog(false)
    }

    const saveName = () => {
        console.log('Nuevo nombre -->', newName)
        setOpenDialog(false)
    }

    return (
        loading ?
            <>
                < CustomCircularProgress style={classes.circularProgressBox} />
            </>
            :
            <div style={{ marginTop: '3%' }}>

                <Button
                    sx={{
                        position: 'absolute',
                        top: '90px',
                        right: '16px',
                        color: '#F3734D',
                        border: '1px solid #F3734D',
                    }}
                    className={classes.editButton}
                    startIcon={move ? <CheckCircleOutlineIcon /> : <EditIcon />}
                    onClick={() => move ? console.log('Nuevos Datos --> ') : setMove(!move)}
                >
                    {move ? 'Guardar cambios' : 'Editar'}
                </Button>

                {move &&
                    <Button
                        sx={{
                            position: 'absolute',
                            top: '90px',
                            right: '200px',
                            color: '#F3734D',
                            border: '1px solid #F3734D',
                        }}
                        className={classes.editButton}
                        startIcon={<ControlPointIcon />}
                    > Agregar mesa
                    </Button>
                }

                <Stack direction={'row'} spacing={3}>
                    {dataTableInfo.map((table, index) => (
                        <Table
                            ref={boxRef.current[index]}
                            x={table.top}
                            y={table.left}
                            key={table.tableName}
                            openDialog={setOpenDialog}
                            getTableName={setTableName}
                            waiter={table.waiter}
                            amount={table.amount}
                            name={table.name}
                            available={table.available}
                            tableName={table.tableName}
                        />

                    ))}
                </Stack>

                <CustomDialog
                    open={openDialog}
                    close={handleCloseDialog}
                    save={saveName}
                    newName={setNewName}
                />
            </div>
    )

}

export { TablesPlace }