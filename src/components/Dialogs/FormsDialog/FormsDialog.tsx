//MUI IMPORTS
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { Controller, useForm } from 'react-hook-form';
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

const defaultWash = {
  client: {
    name: '',
    phone: '',
    address: '',
  },
  car: {
    model: '',
    plate: '',
    color: '',
  },
  service: {
    type: '',
    value: 0,
    status: '',
    os: '',
    obs: '',
  },
  timestamps: {
    entry: '',
    exit: '',
    hour: '',
    data: '',
  },
  id: '',
};

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
    value: z.coerce.number({ error: 'deve ser um numero' }).positive(),
    status: z.string(),
    os: z.string(),
    obs: z.string(),
  }),
  timestamps: z.object({
    entry: z.string().optional(),
    exit: z.string().min(4),
    hour: z.string().optional(),
    data: z.string().optional(),
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
    control,
    formState: { errors, isSubmitting },
  } = useForm<WashFormData>({
    resolver: zodResolver(washSchema) as any,
    defaultValues: initialData || defaultWash, // Se existir, preenche os campos automaticamente!
  });

  const onSubmit = async (data: WashFormData) => {
    const clearData = () => {
      initialData = defaultWash;
    };

    try {
      if (initialData?.id) {
        console.log('clicked and updated');
        await washService.update(data);
        clearData();
      } else {
        const date = new Date();
        data.service.value = Number(data.service.value);
        data.timestamps.hour = DateFormater(date);
        data.timestamps.data = new Date().toLocaleDateString();
        data.timestamps.entry = new Date().toLocaleDateString();

        console.log('clicked in create new ones');

        clearData();
        await washService.set(data);
      }
      handleClick();
    } catch (error) {
      console.error('Erro ao salvar:', error);
    }
  };

  return (
    <>
      <Dialog open={isOpenState} onClose={handleClick}>
        <DialogTitle>Lavagem</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)} id="subscription-form">
            <Controller
              name="client.name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Nome do Cliente"
                  error={!!errors.client?.name}
                  helperText={errors.client?.name?.message}
                  fullWidth
                  autoFocus
                  required
                  margin="dense"
                  type="text"
                  variant="standard"
                />
              )}
            />

            <Controller
              name="client.phone"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Telefone"
                  error={!!errors.client?.phone}
                  helperText={errors.client?.phone?.message}
                  fullWidth
                  autoFocus
                  required
                  margin="dense"
                  type="text"
                  variant="standard"
                />
              )}
            />

            <Controller
              name="client.address"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Endereço"
                  error={!!errors.client?.address}
                  helperText={errors.client?.address?.message}
                  fullWidth
                  autoFocus
                  required
                  margin="dense"
                  type="text"
                  variant="standard"
                />
              )}
            />

            <Controller
              name="car.model"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Carro"
                  error={!!errors.car?.model}
                  helperText={errors.car?.model?.message}
                  fullWidth
                  autoFocus
                  required
                  margin="dense"
                  type="text"
                  variant="standard"
                />
              )}
            />

            <Controller
              name="car.plate"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Placa"
                  error={!!errors.car?.plate}
                  helperText={errors.car?.plate?.message}
                  fullWidth
                  autoFocus
                  required
                  margin="dense"
                  type="text"
                  variant="standard"
                />
              )}
            />

            <Controller
              name="car.color"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Cor"
                  error={!!errors.car?.color}
                  helperText={errors.car?.color?.message}
                  fullWidth
                  autoFocus
                  required
                  margin="dense"
                  type="text"
                  variant="standard"
                />
              )}
            />

            <Controller
              name="service.type"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Tipo"
                  error={!!errors.service?.type}
                  helperText={errors.service?.type?.message}
                  fullWidth
                  autoFocus
                  required
                  margin="dense"
                  type="text"
                  variant="standard"
                />
              )}
            />

            <Controller
              name="service.value"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Valor"
                  error={!!errors.service?.value}
                  helperText={errors.service?.value?.message}
                  fullWidth
                  autoFocus
                  required
                  margin="dense"
                  type="number"
                  variant="standard"
                />
              )}
            />

            <Controller
              name="service.status"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Status"
                  error={!!errors.service?.status}
                  helperText={errors.service?.status?.message}
                  fullWidth
                  autoFocus
                  required
                  margin="dense"
                  type="text"
                  variant="standard"
                />
              )}
            />

            <Controller
              name="service.os"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="OS"
                  error={!!errors.service?.os}
                  helperText={errors.service?.os?.message}
                  fullWidth
                  autoFocus
                  required
                  margin="dense"
                  type="text"
                  variant="standard"
                />
              )}
            />

            <Controller
              name="service.obs"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="OBS"
                  error={!!errors.service?.obs}
                  helperText={errors.service?.obs?.message}
                  fullWidth
                  autoFocus
                  required
                  margin="dense"
                  type="text"
                  variant="standard"
                />
              )}
            />

            <Controller
              name="timestamps.exit"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Saída"
                  error={!!errors.timestamps?.exit}
                  helperText={errors.timestamps?.exit?.message}
                  fullWidth
                  autoFocus
                  required
                  margin="dense"
                  type="text"
                  variant="standard"
                />
              )}
            />
            <DialogActions>
              <Button onClick={handleClick}>Cancel</Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Salvando...' : 'Salvar'}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
