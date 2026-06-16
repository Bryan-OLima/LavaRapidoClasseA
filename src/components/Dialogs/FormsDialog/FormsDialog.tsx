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
import type { Wash } from '../../../interfaces/Washes';
import { WashService } from '../../../services/WashService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

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
    value: z.coerce.number({ error: 'deve ser um numero' }).positive(),
    status: z.string(),
    os: z.string(),
    obs: z.string(),
  }),
  timestamps: z.object({
    entry: z.string().optional(),
    exit: z
      .string()
      .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'O formato deve ser HH:mm'),
    hour: z.string().optional(),
    data: z.string().optional(),
  }),
});
type WashFormData = z.infer<typeof washSchema>;

export default function FormsDialog({
  handleIsOpen,
  isOpenState,
  initialData,
}: FormsDialogProps) {
  const {
    reset,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<WashFormData>({
    resolver: zodResolver(washSchema) as any,
    defaultValues: defaultWash,
  });

  useEffect(() => {
    if (isOpenState) {
      reset(initialData);
    } else {
      reset(defaultWash);
    }
  }, [initialData, reset]);

  const clearData = () => {
    initialData = defaultWash;
  };
  const handleClick = () => {
    reset(defaultWash);
    handleIsOpen(!isOpenState);
  };

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: WashService.setTemp,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['washes'] });
      reset(defaultWash);
      handleIsOpen(false);
    },
  });

  const onSubmit = async (data: WashFormData) => {
    mutation.mutate(data);
    clearData();
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
                  required
                  margin="dense"
                  type="number"
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
              render={({ field: { onChange, value, ...field } }) => (
                <TextField
                  {...field}
                  label="Saída"
                  error={!!errors.timestamps?.exit}
                  helperText={errors.timestamps?.exit?.message}
                  fullWidth
                  required
                  margin="dense"
                  type="text"
                  variant="standard"
                  value={value}
                  onChange={(e) => {
                    let val = e.target.value.replace(/\D/g, '');
                    if (val.length > 4) val = val.slice(0, 4);
                    if (val.length >= 3) {
                      onChange(`${val.slice(0, 2)}:${val.slice(2)}`);
                    } else {
                      onChange(val);
                    }
                  }}
                  placeholder="HH:mm"
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
