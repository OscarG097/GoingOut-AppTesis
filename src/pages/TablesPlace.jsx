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
    // const boxRef = useRef(data.map(() => createRef()))


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
                {/* <Helmet>
                    <title>Cargando... Going Out Management </title>
                </Helmet> */}
                < CustomCircularProgress style={classes.circularProgressBox} />
            </>
            :
            // <Helmet>
            //     <title>Going Out Management | Mesas</title>
            // </Helmet>

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
                        onClick={() => onAddButton()}
                    > Agregar mesa
                    </Button>
                }

                {/* <Stack direction={'row'} spacing={3}> */}
                {/* <div reg={drop} style={{ width: '100%', height: '100%' }}> */}
                {tables.map((table) => (
                    <Table
                        amount={table.amount}
                        available={table.available}
                        getTableName={setTableName}
                        key={table.tableName}
                        move={move}
                        name={table.name}
                        openDialog={setOpenDialog}
                        // ref={boxRef.current[index]}
                        tableName={table.tableName}
                        waiter={table.waiter}
                        x={table.top}
                        y={table.left}
                    />

                ))}
                {/* </div> */}
                {/* </Stack> */}

                <CustomDialog
                    open={openDialog}
                    close={handleCloseDialog}
                    save={saveName}
                    newName={setNewName}
                />
            </div>
    )

}