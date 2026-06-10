# Lava Rápido Classe A — Sistema de Gestão

Aplicação web para gerenciamento de serviços de um lava rápido. Permite visualizar, acompanhar e remover ordens de serviço em tempo real, com navegação entre as seções de lavagens, agenda e financeiro.

---

## Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| React | 19 | UI |
| TypeScript | 6 | Tipagem estática |
| Vite | 8 | Build e dev server |
| React Router DOM | 7 | Roteamento client-side |
| Material UI + Icons | 9 | Componentes e ícones |
| Firebase | — | Autenticação e banco (configurado, pendente de ativação) |

---

## Estrutura do Projeto

```
src/
├── components/
│   ├── Header/         # Cabeçalho com logo e botão "Novo"
│   ├── Navbar/         # Barra de navegação inferior (Agenda / Home / Finanças)
│   └── WashCard/       # Card de ordem de serviço individual
├── config/
│   ├── FirebaseConfig.ts     # Inicialização do Firebase (aguardando credenciais)
│   └── IconConfiguration.ts  # Configuração de tamanho/cor dos ícones
├── hooks/
│   └── useAuth.ts      # Hook de autenticação Firebase (aguardando ativação)
├── mocks/
│   └── washes.tsx      # Dados mockados para desenvolvimento
├── pages/
│   ├── HomePage/       # Lista de ordens de serviço ativas
│   ├── AgendaPage/     # [PRÓXIMA ETAPA] Agendamentos
│   └── FinancePage/    # [PRÓXIMA ETAPA] Controle financeiro
└── utils/
    ├── router.tsx      # Definição das rotas
    └── dateUtils.ts    # Formatação de datas em português relativo
```

---

## Rotas

| Rota | Página | Status |
|---|---|---|
| `/` | HomePage | Funcional |
| `/agenda` | AgendaPage | Em construção |
| `/finance` | FinancePage | Em construção |

---

## Funcionalidades Atuais (MVP)

### HomePage
- Exibe lista de ordens de serviço a partir de dados mockados
- Cada card mostra: cliente, veículo, placa, horário de entrada/saída, observações
- Botão de remover uma ordem da lista (via `useState`)
- Barra de pesquisa por placa (UI pronta, filtro a implementar)
- Botões de Editar e Concluir presentes no card (ações a implementar)

### WashCard
Componente reutilizável que recebe as props abaixo e renderiza um card completo:

| Prop | Tipo | Descrição |
|---|---|---|
| `id` | string | Identificador único |
| `car` | object | Modelo, placa e cor do veículo |
| `plate` | string | Placa exibida em destaque |
| `client` | object | Nome, telefone e endereço do cliente |
| `entry` | string | ISO timestamp de entrada |
| `exit` | string | ISO timestamp de saída |
| `obs` | string | Observações do serviço |
| `onRemove` | function | Callback para remover o card |

### dateUtils
A função `formatRelativeTime(dateString)` converte timestamps ISO em texto relativo em português:
- **agora mesmo** — menos de 1 minuto
- **há Xm** — minutos atrás
- **há Xh** — horas atrás
- **ontem** — dia anterior
- **há X dias** — mais de 2 dias
- **DD/MM** — datas antigas

---

## Identidade Visual

O sistema usa tema escuro com paleta dourada/amarela, definida em variáveis CSS globais:

| Variável | Valor | Uso |
|---|---|---|
| `--bg` | `#0d0d0d` | Fundo principal |
| `--bg-app` | `#1d1d1d` | Fundo da aplicação |
| `--bg-card` | `#272727` | Fundo dos cards |
| `--btn` | `#f9d406` | Botões e destaque |
| `--text-secundary` | `#e6d164` | Texto secundário dourado |
| `--text` | `#fff` | Texto principal |
| `--red` | `#e2361f` | Ações destrutivas |

Layout geral: CSS Grid com 3 linhas — `Header` fixo no topo, `Conteúdo` rolável no centro, `Navbar` fixa na base.

---

## Como Rodar

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Formatar código
npm run prettier-format

# Lint
npm run lint
```

---

## Próximas Etapas

### AgendaPage
Página para visualização e criação de agendamentos futuros. Pontos a desenvolver:
- Calendário ou lista de horários disponíveis
- Formulário para criar novo agendamento (cliente, veículo, serviço, data/hora)
- Integração com o backend/Firebase para persistência
- Possível ligação com a HomePage para converter agendamento em OS ativa

### FinancePage
Página para controle financeiro do lava rápido. Pontos a desenvolver:
- Resumo de faturamento (diário, semanal, mensal)
- Listagem de serviços concluídos com valor e status de pagamento
- Filtragem por período
- Integração com os dados de ordens de serviço concluídas

### Integrações Pendentes
- **Firebase Auth** — código em `src/hooks/useAuth.ts` e `src/config/FirebaseConfig.ts` aguarda credenciais do projeto Firebase para ser ativado
- **Firebase Firestore** — substituir `MOCK_WASHES` de `src/mocks/washes.tsx` por leitura real do banco
- **Pesquisa** — ligar a barra de busca da HomePage ao filtro por placa
- **Editar OS** — implementar ação do botão "Editar" no WashCard
- **Concluir OS** — implementar ação do botão "Concluir" e mover a OS para o histórico financeiro
