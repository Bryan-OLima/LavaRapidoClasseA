import './style.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

function CustomDialog() {
  const [dialogState, setDialogState] = useState(false);
  const handleDialogState = () => {
    setDialogState(!dialogState);
  };
  return (
    <>
      <Button variant="outlined" onClick={handleDialogState}>
        Open alert dialog
      </Button>
      <Dialog
        open={dialogState}
        onClose={handleDialogState}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        role="alertdialog"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogState} autoFocus>
            Disagree
          </Button>
          <Button onClick={handleDialogState}>Agree</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default CustomDialog;
