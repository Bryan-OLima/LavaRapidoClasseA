import type { Wash } from '../interfaces/Washes';
import { DateFormater } from '../utils/dateFormater';

export const WashService = {
  set: async (wash: Wash): Promise<void> => {
    try {
      wash.id = `WASH_${crypto.randomUUID()}`;
      wash.service.status = 'Entregue';
      localStorage.setItem(wash.id, JSON.stringify(wash));
    } catch (e) {
      console.error('Erro ao tentar salvar', e);
    }
  },

  setTemp: async (wash: Wash): Promise<void> => {
    try {
      const date = new Date();
      wash.timestamps.hour = DateFormater(date);
      wash.timestamps.data = new Date().toLocaleDateString();
      wash.timestamps.entry = new Date().toLocaleDateString();
      wash.id = `TEMP_${crypto.randomUUID()}`;

      localStorage.setItem(wash.id, JSON.stringify(wash));

      console.log('criado');
    } catch (e) {
      console.error('Erro ao tentar salvar', e);
    }
  },

  update: async (wash: Wash): Promise<void> => {
    try {
      localStorage.setItem(wash.id, JSON.stringify(wash));
      console.log('registrado');
    } catch (e) {
      console.error('Erro ao tentar atualizar dados', e);
    }
  },

  get: async (id: string): Promise<Wash | null> => {
    const washString = localStorage.getItem(id);
    if (!washString) return null;

    return JSON.parse(washString) as Wash;
  },

  delete: async (id: string): Promise<void> => {
    try {
      localStorage.removeItem(id);
    } catch (e) {
      console.log('Erro ao Deletar', e);
    }
  },

  getAll: async (): Promise<Wash[]> => {
    const washes: Wash[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith('WASH_')) {
        const value = localStorage.getItem(key);

        if (value) {
          try {
            washes.push(JSON.parse(value));
          } catch (e) {
            console.error('Erro ao ler item do storage', e);
          }
        }
      }
    }
    return washes;
  },

  getAllTemp: async (): Promise<Wash[]> => {
    const washes: Wash[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith('TEMP_')) {
        const value = localStorage.getItem(key);

        if (value) {
          try {
            washes.push(JSON.parse(value));
          } catch (e) {
            console.error('Erro ao ler item do storage', e);
          }
        }
      }
    }
    return washes;
  },
};
