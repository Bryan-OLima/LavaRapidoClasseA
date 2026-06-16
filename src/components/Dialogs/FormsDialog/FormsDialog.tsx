import * as React from 'react';

//MUI IMPORTS
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { Wash } from '../../../interfaces/Washes'; // Sua interface
import WashService from '../../../services/WashService';
import { DateFormater } from '../../../utils/dateFormater';

interface FormsDialogProps {
  handleIsOpen: (isOpen: boolean) => void;
  isOpenState: boolean;
  initialData?: Wash;
}

const washSchema = z.object({
  id: z.string(),
  client: z.object({
    name: z
      .string()
      .min(3, 'O nome do cliente deve ter pelo menos 3 caracteres'),
    phone: z.string().min(9),
    address: z.string(),
  }),
  car: z.object({
    model: z.string().min(2),
    plate: z.string().min(7),
    color: z.string().optional(),
  }),

  service: z.object({
    type: z.string().min(1, 'Selecione um tipo'),
    value: z.number().positive(),
    status: z.string(),
    os: z.string(),
    obs: z.string(),
  }),
  timestamps: z.object({
    entry: z.string(),
    exit: z.string().min(4),
    hour: z.string(),
    data: z.string(),
  }),
});

const washService = WashService();
type WashFormData = z.infer<typeof washSchema>;

export default function FormsDialog({
  handleIsOpen,
  isOpenState,
  initialData,
}: FormsDialogProps) {
  const handleClick = () => {
    handleIsOpen(!isOpenState);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<WashFormData>({
    resolver: zodResolver(washSchema),
    defaultValues: initialData, // Se existir, preenche os campos automaticamente!
  });

  const onSubmit = async (data: WashFormData) => {
    try {
      if (initialData?.id) {
        await washService.set(data);
      } else {
        const date = new Date();
        data.id = crypto.randomUUID();
        data.timestamps.hour = DateFormater(date);
        data.timestamps.data = new Date().toLocaleDateString();
        data.timestamps.entry = new Date().toLocaleDateString();

        await washService.set(data);
      }
      handleClick();
    } catch (error) {
      console.error('Erro ao salvar:', error);
    }
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClick}>
        Open form dialog
      </Button>
      <Dialog open={isOpenState} onClose={handleClick}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <form onSubmit={handleClick} id="subscription-form">
            <input {...register('client.name')} placeholder="Nome do Cliente" />
            {errors.client?.name && <p>{errors.client.name.message}</p>}

            <input
              {...register('client.phone')}
              placeholder="Tipo de Lavagem"
            />
            {errors.client?.phone && <p>{errors.client.phone.message}</p>}

            <input
              {...register('client.address')}
              placeholder="Tipo de Lavagem"
            />
            {errors.client?.address && <p>{errors.client.address.message}</p>}

            <input {...register('car.model')} placeholder="Tipo de Lavagem" />
            {errors.car?.model && <p>{errors.car.model.message}</p>}

            <input {...register('car.plate')} placeholder="Tipo de Lavagem" />
            {errors.car?.plate && <p>{errors.car.plate.message}</p>}

            <input {...register('car.color')} placeholder="Tipo de Lavagem" />
            {errors.car?.color && <p>{errors.car.color.message}</p>}

            <input
              {...register('service.type')}
              placeholder="Tipo de Lavagem"
            />
            {errors.service?.type && <p>{errors.service.type.message}</p>}

            <input
              {...register('service.value')}
              placeholder="Tipo de Lavagem"
            />
            {errors.service?.value && <p>{errors.service.value.message}</p>}

            <input
              {...register('service.status')}
              placeholder="Tipo de Lavagem"
            />
            {errors.service?.status && <p>{errors.service.status.message}</p>}

            <input {...register('service.os')} placeholder="Tipo de Lavagem" />
            {errors.service?.os && <p>{errors.service.os.message}</p>}

            <input {...register('service.obs')} placeholder="Tipo de Lavagem" />
            {errors.service?.obs && <p>{errors.service.obs.message}</p>}

            <input
              {...register('timestamps.exit')}
              placeholder="Tipo de Lavagem"
            />
            {errors.timestamps?.exit && <p>{errors.timestamps.exit.message}</p>}

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Salvando...' : 'Salvar'}
            </button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick}>Cancel</Button>
          <Button type="submit" form="subscription-form">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

//  <TextField
//               autoFocus
//               required
//               margin="dense"
//               id="name"
//               name="name"
//               label="Nome"
//               type="text"
//               fullWidth
//               variant="standard"
//             />
//             <TextField
//               autoFocus
//               required
//               margin="dense"
//               id="car"
//               name="car"
//               label="Carro"
//               type="text"
//               fullWidth
//               variant="standard"
//             />
//             <TextField
//               autoFocus
//               required
//               margin="dense"
//               id="name"
//               name="email"
//               label="Email Address"
//               type="text"
//               fullWidth
//               variant="standard"
//             />
