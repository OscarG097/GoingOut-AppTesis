/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { TablesPlaceStyles } from "../tables-place/TablesPlaceStyles";
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from "@mui/icons-material/Save";
import CustomAutocomplete from "../../utils/CustomAutocomplete";
import SearchIcon from '@mui/icons-material/Search';
//Hook de fetch, donde se le manda el type(postre, bebida, plato) para armar la url

const MenuInfo = ({ path, label }) => {
    const [editingData, setEditingData] = useState(null)
    const classes = TablesPlaceStyles()

    const handleEditClick = (data) => {
        setEditingData(data);
    }

    const handleClickSaveData = (data) => {
        console.log(data)
    }

    const handleNameChange = (e) => {
        const updatedName = e.target.value
        setEditingData((prevData) => ({ ...prevData, name: updatedName }));
    }

    const handleDescriptionChange = (e) => {
        const updatedDescription = e.target.value
        setEditingData((prevData) => ({ ...prevData, description: updatedDescription }));
    }

    const handlePriceChange = (e) => {
        const updatedPrice = e.target.value
        setEditingData((prevData) => ({ ...prevData, price: updatedPrice }));
    }

    const RowData = ({ data }) => {
        const enableEdit = editingData && editingData.id === data.id

        return (
            <TableRow sx={{ margin: 'auto', paddingLeft: '50px' }}>
                <TableCell>{enableEdit ? <TextField id={`${data.id}dessert-name`} variant="standard" defaultValue={data.name} onChange={(e) => handleNameChange(e.target.value)} /> : data.name}</TableCell>
                <TableCell>{enableEdit ? <TextField id={`${data.id}dessert-description`} variant="standard" multiline rows={3} defaultValue={data.description} onChange={(e) => handleDescriptionChange(e.target.value)} /> : data.description}</TableCell>
                <TableCell>{enableEdit ? <TextField id={`${data.id}dessert-price`} variant="standard" defaultValue={data.price} onChange={(e) => handlePriceChange(e.target.value)} /> : data.price}</TableCell>
                <TableCell>
                    <IconButton
                        label={enableEdit ? "Guardar" : "Editar"}
                        onClick={enableEdit ? () => handleClickSaveData(data) : () => handleEditClick(data)}
                    >
                        {
                            enableEdit ?
                                <SaveIcon fontSize="inherit" />
                                :
                                <EditIcon fontSize="inherit" />
                        }
                    </IconButton>

                    <IconButton aria-label="delete" size="small">
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>
                </TableCell>
            </TableRow>



        )
    }

    const postres = [
        { id: 1, name: 'Cheesecake de Fresa', description: 'Deliciosa cheesecake de fresa con base de galleta', price: '$6.99' },
        { id: 2, name: 'Mousse de Chocolate', description: 'Suave y cremoso mousse de chocolate negro', price: '$4.99' },
        { id: 3, name: 'Cupcakes de Vainilla', description: 'Tiernos cupcakes de vainilla con glaseado de colores', price: '$2.50' },
        { id: 4, name: 'Tiramisú', description: 'Clásico postre italiano con capas de bizcocho y crema de mascarpone', price: '$7.50' },
        { id: 5, name: 'Profiteroles', description: 'Pequeños bocados de masa rellenos de crema y cubiertos de chocolate', price: '$3.75' },
        { id: 6, name: 'Pastel de Zanahoria', description: 'Esponjoso pastel con zanahoria rallada, nueces y crema de queso', price: '$5.50' },
        { id: 7, name: 'Crepes de Nutella', description: 'Delgadas crepes rellenas de Nutella y frutas frescas', price: '$4.25' },
        { id: 8, name: 'Gelato de Limón', description: 'Refrescante helado de limón con un toque cítrico', price: '$3.99' },
        { id: 9, name: 'Strudel de Manzana', description: 'Postre tradicional con manzanas y masa crujiente', price: '$5.25' },
        { id: 10, name: 'Soufflé de Chocolate', description: 'Esponjoso soufflé de chocolate con centro derretido', price: '$6.50' }
    ];

    return (
        <>
            <Stack
                direction={'row'}
                spacing={2}
                alignContent={'center'}
            >
                <CustomAutocomplete label={label} options={postres} />
                <Button
                    className={classes.editButton}
                    sx={{ height: '50px' }}
                    startIcon={<SearchIcon />}
                >
                    Buscar {label}
                </Button>
            </Stack>

            <Paper sx={{ width: '100%' }}>
                {/* el label depende del type */}
                <TableContainer>
                    <Table>
                        <TableBody>
                            {postres.map((data) => (
                                <RowData key={data.id} data={data} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </>
    )
}
export default MenuInfo
