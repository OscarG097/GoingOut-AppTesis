import {
    // createRef,
    useEffect,
    // useRef,
    useState
} from "react";
import { Button } from "@mui/material";
import { TablesPlaceStyles } from "../app/tables-place/TablesPlaceStyles";
import { dataTableInfo } from "../../data";
import { useGetDataTables } from "../hooks/useGetDataTables";
import CustomCircularProgress from "../app/utils/CustomCircularProgress";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import Table from "../app/tables-place/Table";
import CustomDialog from "../app/tables-place/Dialog";

export function TablesPlace() {
    const [newName, setNewName] = useState('')
    const [move, setMove] = useState(false)
    const [tableName, setTableName] = useState('')
    const [tables, setTables] = useState([])
    const [openDialog, setOpenDialog] = useState(false)
    const classes = TablesPlaceStyles()
    const { loading, data } = useGetDataTables(dataTableInfo)


    useEffect(() => {
        setTables(dataTableInfo)
    }, [])

    const onAddButton = () => {
        let newTable = { left: 0, top: 0, tableName: data.length + 1, widht: 70, height: 50, available: true, name: null, waiter: null, amount: 0 }
        setTables(value => [...value, newTable])
    }

    const handleCloseDialog = () => {
        setOpenDialog(false)
    }

    const saveName = () => {
        console.log('Nuevo nombre -->', newName)
        const updateTable = data.map(table => {
            if (table.tableName === tableName) {
                return { ...table, name: newName, available: false };
            }
            return table;
        });
        setTables(updateTable)
        setOpenDialog(false)
    }

    return (
        loading ?
            <>
                < CustomCircularProgress style={classes.circularProgressBox} />
            </>
            :
            <>
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
                        onClick={() => onAddButton()}
                    > Agregar mesa
                    </Button>
                }

                {tables.map((table) => (
                    <Table
                        key={table.tableName}
                        amount={table.amount}
                        available={table.available}
                        getTableName={setTableName}
                        move={move}
                        name={table.name}
                        openDialog={setOpenDialog}
                        tableName={table.tableName}
                        waiter={table.waiter}
                        x={table.top}
                        y={table.left}
                    />
                ))}

                <CustomDialog
                    open={openDialog}
                    close={handleCloseDialog}
                    save={saveName}
                    newName={setNewName}
                />

            </>
    )

}