export const MOCK_WASHES = [
  {
    id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    cliente: {
      nome: 'Ana Silva',
      telefone: '(17) 99123-4567',
      endereco: 'Rua das Palmeiras, 123',
    },
    veiculo: {
      modelo: 'Toyota Corolla',
      placa: 'ABC-1234',
      cor: 'Prata',
    },
    servico: {
      tipo: 'Completa',
      valor: 120.0,
      status: 'pronto',
      os: 'Cera líquida adicional, limpeza de estofado',
      observacao: 'Sem avarias detectadas.',
    },
    timestamps: {
      entrada: '2026-05-14T08:00:00Z',
      saida: '2026-05-14T09:00:00Z',
    },
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440000',
    cliente: {
      nome: 'Bruno Oliveira',
      telefone: '(17) 98877-6655',
      endereco: 'Av. Brasil, 456',
    },
    veiculo: {
      modelo: 'Honda Civic',
      placa: 'XYZ-5678',
      cor: 'Preto',
    },
    servico: {
      tipo: 'Simples',
      valor: 50.0,
      status: 'pronto',
      os: 'Lavagem básica + pretinho nos pneus',
      observacao:
        'Carro batido na porta esquerda e risco no para-choque traseiro.',
    },
    timestamps: {
      entrada: '2026-05-14T08:30:00Z',
      saida: '2026-05-14T09:45:00Z',
    },
  },
  {
    id: '67e55044-10b1-426f-9247-bb680e5fe0c8',
    cliente: {
      nome: 'Carla Souza',
      telefone: '(17) 99766-1122',
      endereco: 'Rua XV de Novembro, 789',
    },
    veiculo: {
      modelo: 'Hyundai HB20',
      placa: 'DEF-9012',
      cor: 'Branco',
    },
    servico: {
      tipo: 'Ducha',
      valor: 35.0,
      status: 'pendente',
      os: 'Somente ducha externa rápida',
      observacao: 'Vidro trincado no canto inferior direito.',
    },
    timestamps: {
      entrada: '2026-05-14T09:00:00Z',
      saida: '2026-05-14T10:30:00Z',
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174000',
    cliente: {
      nome: 'Diego Santos',
      telefone: '(17) 99144-8899',
      endereco: 'Rua Santa Luzia, 12',
    },
    veiculo: {
      modelo: 'Jeep Renegade',
      placa: 'GHI-3456',
      cor: 'Verde Militar',
    },
    servico: {
      tipo: 'Completa',
      valor: 180.0,
      status: 'pendente',
      os: 'Cera cristalizadora e higienização de ar-condicionado',
      observacao: 'Roda dianteira direita ralada.',
    },
    timestamps: {
      entrada: '2026-05-14T09:15:00Z',
      saida: '2026-05-14T11:00:00Z',
    },
  },
  {
    id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
    cliente: {
      nome: 'Elena Rocha',
      telefone: '(17) 98155-2233',
      endereco: 'Rua Tiradentes, 550',
    },
    veiculo: {
      modelo: 'Chevrolet Onix',
      placa: 'JKL-7890',
      cor: 'Azul',
    },
    servico: {
      tipo: 'Simples',
      valor: 60.0,
      status: 'não-iniciado',
      os: 'Lavagem simples + aspiração interna profunda',
      observacao: 'Sem avarias aparentes.',
    },
    timestamps: {
      entrada: '2026-05-14T10:00:00Z',
      saida: null,
    },
  },
];
