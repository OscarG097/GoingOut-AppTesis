import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from '@mui/material';
import { PropTypes } from 'prop-types';

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
                    onChange={(e) => newName(e.target.value)}>
                </TextField>
            </DialogContent>
            <DialogActions>
                <Button onClick={close}>Cancelar</Button>
                <Button onClick={() => save()}>Aceptar</Button>
            </DialogActions>
        </Dialog>
    )
}

export default CustomDialog

CustomDialog.propTypes = {
    open: PropTypes.any,
    close: PropTypes.any,
    save: PropTypes.any,
    newName: PropTypes.any
}