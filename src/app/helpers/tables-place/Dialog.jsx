/* eslint-disable react/prop-types */
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from '@mui/material';

function CustomDialog(props) {
    const { open, close, save, newName } = props

    return (
        <Dialog open={open} onClose={close}>
            <DialogTitle>Nuevo Ingreso</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Ingrese el nombre del cliente
                </DialogContentText>
                <TextField
                    autoFocus
                    fullWidth
                    margin='dense'
                    id='nombre'
                    label='Nombre'
                    type='text'
                    variant='standard'
                    onChange={(e) => newName(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={close}>Cancelar</Button>
                <Button onClick={() => save()}>Aceptar</Button>
            </DialogActions>
        </Dialog>
    )
}

export default CustomDialog