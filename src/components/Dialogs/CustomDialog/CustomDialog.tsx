import { Dialog } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import './style.css';
import { WashService } from '../../../services/WashService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
interface CustomDialogProps {
  id: string;
  HtmlCodeBlock?: React.ReactNode;
  buttons: {
    confirmationButton: Button;
    secundaryButton?: Button;
  };
  isStateOpen: boolean;
  handleIsOpen: (state: boolean) => void;
  isRemove: boolean;
  collection: any;
}

interface Button {
  color: string;
  name: string;
}

function CustomDialog({
  id,
  HtmlCodeBlock,
  buttons,
  isStateOpen,
  handleIsOpen,
  isRemove,
  collection,
}: CustomDialogProps) {
  const queryClient = useQueryClient();
  let mutation: any;
  if (isRemove) {
    mutation = useMutation({
      mutationFn: (params: { id: string; collection: string }) =>
        WashService.delete(params.id, params.collection),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['washes'] });
        handleIsOpen(!isStateOpen);
      },
    });
  } else {
    mutation = useMutation({
      mutationFn: (id: string) => WashService.setWashAndDeleteTemp(id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['washes'] });
        handleIsOpen(!isStateOpen);
      },
    });
  }

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
              if (isRemove) {
                return mutation.mutate({ id, collection });
              } else {
                return mutation.mutate(id);
              }
            }}
          >
            {buttons.confirmationButton.name}
          </button>
          <button
            className="card-btn"
            style={{ width: '50%', border: 'none' }}
            onClick={() => {
              handleIsOpen(!isStateOpen);
            }}
            autoFocus
          >
            {buttons.secundaryButton?.name}
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default CustomDialog;
