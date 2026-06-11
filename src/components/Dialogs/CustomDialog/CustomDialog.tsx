import './style.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useState } from 'react';

interface CustomDialogProps {
  id: string;
  carModel: string;
  clientName: string;
}

function CustomDialog({ id, carModel, clientName }: CustomDialogProps) {
  const [dialogState, setDialogState] = useState(false);
  const handleDialogState = () => {
    setDialogState(!dialogState);
  };

  const removeItem = () => {
    console.log(`Removing ${id}`);
    handleDialogState();
  };

  return (
    <>
      <button className="card-btn btn-rmv" onClick={() => setDialogState(true)}>
        REMOVER
      </button>
      <Dialog
        open={dialogState}
        onClose={handleDialogState}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        role="alertdialog"
      >
        <DialogContent
          sx={{ backgroundColor: 'var(--bg-card)', color: '#FFF' }}
        >
          Você tem certeza que quer remover a lavagem do carro{' '}
          <span className="warn">{carModel}</span> do cliente{' '}
          <span className="warn">{clientName}</span>?
        </DialogContent>
        <DialogActions sx={{ backgroundColor: 'var(--bg-card)' }}>
          <button
            onClick={removeItem}
            className="card-btn btn-rmv"
            style={{ width: '50%', border: 'none' }}
          >
            REMOVER
          </button>
          <button
            className="card-btn"
            onClick={() => setDialogState(false)}
            style={{ width: '50%', border: 'none' }}
            autoFocus
          >
            CANCELAR
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default CustomDialog;
