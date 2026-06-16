export interface Wash {
  id: string;
  client: {
    name: string;
    phone: string;
    address: string;
  };
  car: {
    model: string;
    plate: string;
    color?: string;
  };
  service: {
    value: number;
    status: string;
    os: string;
    obs: string;
  };
  timestamps: {
    entry?: string;
    exit: string;
    hour?: string;
    data?: string;
  };
}
