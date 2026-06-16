import type { Wash } from '../interfaces/Washes';

export default function WashService() {
  console.log('local storage service');
  return {
    set: (wash: Wash) => {
      localStorage.setItem(wash.id, JSON.stringify(wash));
      console.log(wash.timestamps.hour);
      console.log(wash.timestamps.data);

      console.log('criado');
    },

    update: (wash: Wash) => {
      localStorage.setItem(wash.id, JSON.stringify(wash));
      console.log('registrado');
    },

    get: (id: string) => {
      const washString = localStorage.getItem(id);
      if (!washString) return null;

      return JSON.parse(washString) as Wash;
    },

    delete: (id: string) => {
      localStorage.removeItem(id);
    },

    getAll: () => {
      const db: any = {};

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.startsWith('Wash_')) {
          const value = localStorage.getItem(key);

          if (!value) return null;
          try {
            db[key] = JSON.parse(value);
          } catch {
            db[key] = value;
          }
        }
      }
      return db;
    },
  };
}
