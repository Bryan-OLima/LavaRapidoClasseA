import { Dialog } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import './style.css';

interface ConfirmationDialogProps {
  id?: string;
  HtmlCodeBlock?: React.ReactNode;
  buttons: {
    confirmationButton: Button;
    secundaryButton?: Button;
  };
  isStateOpen: boolean;
  handleIsOpen: (state: boolean) => void;
}

interface Button {
  color: string;
  name: string;
}

function ConfirmationDialog({
  id,
  HtmlCodeBlock,
  buttons,
  isStateOpen,
  handleIsOpen,
}: ConfirmationDialogProps) {
  return (
    <>
      <Dialog
        open={isStateOpen}
        onClose={handleIsOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        role="alertdialog"
      >
        <DialogContent
          sx={{ backgroundColor: 'var(--bg-card)', color: '#FFF' }}
        >
          {HtmlCodeBlock ? HtmlCodeBlock : null}
        </DialogContent>
        <DialogActions sx={{ backgroundColor: 'var(--bg-card)' }}>
          <button
            className="card-btn"
            style={{ color: buttons.confirmationButton.color, border: 'none' }}
            onClick={() => {
              console.log(`MENSAGEM TEST: ${id} excluído com sucesso!`);
              handleIsOpen(false);
            }}
          >
            {buttons.confirmationButton.name}
          </button>
          <button
            className="card-btn"
            style={{ width: '50%', border: 'none' }}
            onClick={() => handleIsOpen(false)}
            autoFocus
          >
            {buttons.secundaryButton?.name}
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ConfirmationDialog;
