import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from 'firebase/firestore';
// import  from '../config/FirebaseConfig';
import type { Wash } from '../interfaces/Washes';
import { DateFormater } from '../utils/dateFormater';
import { db } from '../config/FirebaseConfig';
import { fireBaseWashConverter } from '../utils/FirebaseWashConverter';

const status = ['Não iniciado', 'Lavando', 'Pronto', 'Entregue'];
const structure: Wash = {
  id: '',
  client: {
    name: '',
    phone: '',
    address: '',
  },
  car: {
    model: '',
    plate: '',
    color: undefined,
  },
  service: {
    value: 0,
    status: '',
    os: '',
    obs: '',
  },
  timestamps: {
    entry: undefined,
    exit: '',
    hour: undefined,
    data: undefined,
  },
};
export const WashService = {
  setWashAndDeleteTemp: async (tempWashId: string): Promise<void | null> => {
    const docTempRef = doc(db, 'TEMP', tempWashId).withConverter(
      fireBaseWashConverter
    );

    const queryTempSnapshot = getDoc(docTempRef);

    try {
      let washTemp: Wash | undefined = structure;

      if ((await queryTempSnapshot).exists()) {
        const wash: Wash | undefined = (await queryTempSnapshot).data();
        washTemp = wash;
      }

      try {
        const washRef = doc(db, 'Washes', washTemp!.id);

        washTemp!.service.status = 'Entregue';
        await setDoc(washRef, washTemp);

        try {
          await deleteDoc(docTempRef);
        } catch (e) {
          console.error('Erro ao tentar deletar', e);
        }
      } catch (e) {
        console.error('Erro ao tentar salvar TEMP em Washes', e);
      }
    } catch (e) {
      console.error('Erro ao tentar recuperar dados do card', e);
    }
  },

  setTemp: async (wash: Wash): Promise<void> => {
    try {
      const date = new Date();
      wash.timestamps.hour = DateFormater(date);
      wash.timestamps.data = new Date().toLocaleDateString();
      wash.timestamps.entry = new Date().toLocaleDateString();
      wash.service.status = status[0];
      wash.id = crypto.randomUUID();

      const docRef = doc(db, 'TEMP', wash.id);
      await setDoc(docRef, wash);
    } catch (e) {
      console.error('Erro ao adicionar uma nova lavagem ao banco', e);
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

  delete: async (id: string, collection: string): Promise<void> => {
    const docRef = doc(db, collection, id);

    try {
      await deleteDoc(docRef);
      console.log('Deletado com sucesso!');
    } catch (e) {
      console.error('Erro ao tentar deletar', e);
    }
  },

  getAll: async (): Promise<Wash[]> => {
    const washes: Wash[] = [];
    try {
      const washesRef = collection(db, 'Washes').withConverter(
        fireBaseWashConverter
      );
      const querySnapshot = await getDocs(washesRef);

      querySnapshot.docs.map((doc) => {
        washes.push(doc.data());
      });
    } catch (e) {
      console.error(e);
    }
    console.log(washes);
    return washes;
  },

  getAllTemp: async (): Promise<Wash[]> => {
    const washes: Wash[] = [];
    try {
      const washesRef = collection(db, 'TEMP').withConverter(
        fireBaseWashConverter
      );
      const querySnapshot = await getDocs(washesRef);

      querySnapshot.docs.map((doc) => {
        washes.push(doc.data());
      });
    } catch (e) {
      console.error(e);
    }
    console.log(washes);
    return washes;
  },
};
