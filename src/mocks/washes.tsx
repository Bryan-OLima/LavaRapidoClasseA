export const MOCK_WASHES = [
  {
    id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    client: {
      name: 'Ana Silva',
      phone: '(17) 99123-4567',
      address: 'Rua das Palmeiras, 123',
    },
    car: {
      model: 'Toyota colorolla',
      plate: 'ABC-1234',
      color: 'Prata',
    },
    service: {
      type: 'Completa', // retirar type
      value: 120.0,
      status: 'pronto', //  pronto, iniciado, em espera
      os: 'Cera líquida adicional, limpeza de estofado',
      obs: 'Sem avarias detectadas.',
    },
    timestamps: {
      entry: '2026-05-14T08:00:00Z',
      exit: '2026-05-14T09:00:00Z',
    },
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440000',
    client: {
      name: 'Bruno Oliveira',
      phone: '(17) 98877-6655',
      address: 'Av. Brasil, 456',
    },
    car: {
      model: 'Honda Civic',
      plate: 'XYZ-5678',
      color: 'Preto',
    },
    service: {
      type: 'Simples',
      value: 50.0,
      status: 'pronto',
      os: 'Lavagem básica + pretinho nos pneus',
      obs: 'Carro batido na porta esquerda e risco no para-choque traseiro.',
    },
    timestamps: {
      entry: '2026-05-14T08:30:00Z',
      exit: '2026-05-14T09:45:00Z',
    },
  },
  {
    id: '67e55044-10b1-426f-9247-bb680e5fe0c8',
    client: {
      name: 'Carla Souza',
      phone: '(17) 99766-1122',
      address: 'Rua XV de Novembro, 789',
    },
    car: {
      model: 'Hyundai HB20',
      plate: 'DEF-9012',
      color: 'Branco',
    },
    service: {
      type: 'Ducha',
      value: 35.0,
      status: 'pendente',
      os: 'Somente ducha externa rápida',
      obs: 'Vidro trincado no canto inferior direito.',
    },
    timestamps: {
      entry: '2026-05-14T09:00:00Z',
      exit: '2026-05-14T10:30:00Z',
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174000',
    client: {
      name: 'Diego Santos',
      phone: '(17) 99144-8899',
      address: 'Rua Santa Luzia, 12',
    },
    car: {
      model: 'Jeep Renegade',
      plate: 'GHI-3456',
      color: 'Verde Militar',
    },
    service: {
      type: 'Completa',
      value: 180.0,
      status: 'pendente',
      os: 'Cera cristalizadora e higienização de ar-condicionado',
      obs: 'Roda dianteira direita ralada.',
    },
    timestamps: {
      entry: '2026-05-14T09:15:00Z',
      exit: '2026-05-14T11:00:00Z',
    },
  },
  {
    id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
    client: {
      name: 'Elena Rocha',
      phone: '(17) 98155-2233',
      address: 'Rua Tiradentes, 550',
    },
    car: {
      model: 'Chevrolet Onix',
      plate: 'JKL-7890',
      color: 'Azul',
    },
    service: {
      type: 'Simples',
      value: 60.0,
      status: 'não-iniciado',
      os: 'Lavagem simples + aspiração interna profunda',
      obs: 'Sem avarias aparentes.',
    },
    timestamps: {
      entry: '2026-05-14T10:00:00Z',
      exit: '2026-05-14T12:00:00Z',
    },
  },
];
